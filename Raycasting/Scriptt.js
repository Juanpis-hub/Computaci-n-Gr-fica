var scene, aspect, camera, camera2, renderer, renderer2,controls;
var voxelTransparente, geoVoxel, matVoxel;
var geoVoxel2, geoVoxelp2, matVoxel2;
var plano, raycast, mousePosX, mousePosY, mousePos;
var interseccion, objetos = [], objetoInterseccion;

init();
animate();

function init() {
    //INICIALIZACIÓN
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0x999999);
    aspect = window.innerWidth / window.innerHeight;
    camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 10000);
    camera2 = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 10000);
    renderer = new THREE.WebGLRenderer();
    renderer2 = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth/2, window.innerHeight/2);
    renderer2.setSize(window.innerWidth / 2, window.innerHeight / 2);
    document.body.appendChild(renderer.domElement);
    document.body.appendChild(renderer2.domElement);
    //controls = new THREE.OrbitControls(camera, renderer.domElement);

    //ELEMENTOS COMUNES
    var size = 10;
    var arrowSize = 1;
    var divisions = size;
    var origin = new THREE.Vector3(0, 0, 0);
    var x = new THREE.Vector3(1, 0, 0);
    var y = new THREE.Vector3(0, 1, 0);
    var z = new THREE.Vector3(0, 0, 1);
    var color = new THREE.Color(0x333333);
    var colorR = new THREE.Color(0xAA3333);
    var colorG = new THREE.Color(0x33AA33);
    var colorB = new THREE.Color(0x333366);

    //CREAR LAS GRILLAS PARA EL ESCENARIO
    var axesHelper = new THREE.AxesHelper(size);
    scene.add(axesHelper);

    var gridHelperXZ = new THREE.GridHelper(size, divisions, color, color);
    scene.add(gridHelperXZ);

    //ROTARLAS PARA QUE QUEDEN EN EL ESPACIO ADECUADO
    gridHelperXZ.rotateOnWorldAxis(y, THREE.Math.degToRad(90));

    //CREAR ILUMINACIÓN
    var ambient = new THREE.AmbientLight(0xffffff, 2);
    scene.add(ambient);

    var pointLight = new THREE.PointLight(0xffffff, 1, 100);
    pointLight.position.set(-15, -12, 15);
    scene.add(pointLight);

    var pointLight = new THREE.PointLight(0xffffff, .5, 100);
    pointLight.position.set(15, -12, -15);
    scene.add(pointLight);

    camera.position.x = 15;
    camera.position.y = 15;
    camera.position.z = 20;
    camera.lookAt(origin);

    camera2.position.x = -20;
    camera2.position.y = -15;
    camera2.position.z = -24;
    camera2.lookAt(origin);

    /* ----------------------------------------------------------------------------------------------------------------------------*/
   
    var geocaja = new THREE.BoxGeometry(5, 5, 5);
    var materialTransparente = new THREE.MeshStandardMaterial({ color: 0x0000FF, transparent: true, opacity: 1 });
    var materiall = new THREE.MeshNormalMaterial({ side: THREE.DoubleSide});
    var cube = new THREE.Mesh(geocaja, materiall);

    var geoesfe = new THREE.SphereGeometry(4, 32, 32);
    var sphere = new THREE.Mesh(geoesfe, materiall);

    var geocili = new THREE.CylinderGeometry(3, 3, 5, 32);
    var cylinder = new THREE.Mesh(geocili, materiall);
    

    sphere.position.x = -7;
    sphere.position.z = 7;
    cylinder.position.x = 7;
    cylinder.position.z = -7;

    scene.add(sphere);
    scene.add(cube);
    scene.add(cylinder);

    objetos.push(cube);
    objetos.push(sphere);
    objetos.push(cylinder);

    raycast = new THREE.Raycaster();
    mousePos = new THREE.Vector2();

    /* ----------------------------------------------------------------------------------------------------------------------------*/
    document.addEventListener('mousedown', onDocumentMouseDown, false);
}
function animate() {
    requestAnimationFrame(animate);
    //controls.update();
    render();
}
function render() {
    renderer.render(scene, camera);
    renderer2.render(scene, camera2);
}

function onDocumentMouseDown(e) {
    e.preventDefault();
    mousePosX = (event.clientX / window.innerWidth) * 2 - 1;
    mousePosY = - (event.clientY / window.innerHeight) * 2 + 1;
    mousePos = new THREE.Vector2(mousePosX, mousePosY);
    //console.log(mousePos);
    for (var a = -1; a < 1; a += 0.05) {
        for (var b = -1; b < 1; b += 0.05) {
            var v2 = new THREE.Vector2(a, b);
            raycast.setFromCamera(v2, camera);
            //console.log(raycast.ray.direction);
            interseccion = raycast.intersectObjects(objetos);
            if (interseccion.length > 0) {
                for (var i = 0; i < interseccion.length; i++) {
                    for (var m = 0; m < interseccion[i].object.geometry.faces.length; m++){
                        var angulo = interseccion[i].object.geometry.faces[m].normal.angleTo(raycast.ray.direction);
                        var angu = (angulo*180)/Math.PI
                        //console.log(angu);
                        if(angu < 90){
                            interseccion[i].object.geometry.faces.splice(m,1);
                            interseccion[i].object.geometry.elementsNeedUpdate = true;
                        }
                        
                    }
                    //console.log(interseccion[i].object);
                }
            }
        }
    }

    render();
}

