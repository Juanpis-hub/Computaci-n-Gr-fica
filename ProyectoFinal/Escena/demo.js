var scene, camera, renderer, mesh, cub;
var meshFloor, ambientLight, light;

var keyboard = {};
var player = { height:1.8, speed:0.1, turnSpeed:Math.PI*0.02 };
var USE_WIREFRAME = false;

////////////////////////////////////////

var nodes = [
				{ id: 1, value: 0.2, x:0, y:0.5, z:-25 },
				{ id: 2, value: 0.2, x:0, y:0.5, z:-20 },
				{ id: 3, value: 0.2, x:-7, y:0.5, z:-20,},
				{ id: 4, value: 0.2, x:-13, y:0.5, z:-20 },
				{ id: 5, value: 0.2, x:-13, y:0.5, z:-13},
				{ id: 6, value: 0.2, x:-13, y:0.5, z:-8 },
                { id: 7, value: 0.2, x:-6, y:0.5, z:-8 },
				{ id: 8, value: 0.2, x:3.5, y:0.5, z:-8 },
				{ id: 9, value: 0.2, x:3.5, y:0.5, z:0,},
				{ id: 10, value: 0.2, x:3.5, y:0.5, z:7 },
				{ id: 11, value: 0.2, x:3.5, y:0.5, z:17},
				{ id: 12, value: 0.2, x:3.5, y:0.5, z:24 },
                { id: 13, value: 0.2, x:3.5, y:0.5, z: 29.5 },
				{ id: 14, value: 0.2, x:9, y:0.5, z:29.5},
				{ id: 15, value: 0.2, x:18, y:0.5, z:29.5 },
                { id: 16, value: 0.2, x:25, y:0.5, z:29.5 },
			
			];

		// create connections between people
		// value corresponds with the amount of contact between two people
		var edges = [
				{ from: 1, to: 0, value: 3 },
				{ from: 2, to: 1, value: 3 },
				{ from: 3, to: 2, value: 3 },
				{ from: 4, to: 3, value: 3 },
				{ from: 5, to: 4, value: 3 },
                { from: 6, to: 5, value: 3 },
				{ from: 7, to: 6, value: 3 },
				{ from: 8, to: 7, value: 3 },
				{ from: 9, to: 8, value: 3 },
				{ from: 10, to: 9, value: 3 },
                { from: 11, to: 10, value: 3 },
				{ from: 12, to: 11, value: 3 },
				{ from: 13, to: 12, value: 3 },
				{ from: 14, to: 13, value: 3 },
				{ from: 15, to: 14, value: 3 },
               
				
			];
var nodes2 = [
				{ id: 1, value: 0.2, x:31, y:0.5, z:-33 },
				{ id: 2, value: 0.2, x:31, y:0.5, z:-18 },
				{ id: 3, value: 0.2, x:17, y:0.5, z:-18,},
				{ id: 4, value: 0.2, x:5, y:0.5, z:-18 },
                { id: 5, value: 0.2, x:-17, y:0.5, z:-18 },
                { id: 6, value: 0.2, x:-30, y:0.5, z:-18 },
                {  id: 7, value: 0.2, x:-30, y:0.5, z:-30 },
                {  id: 8, value: 0.2, x:-17, y:0.5, z:-5},
                {  id: 9, value: 0.2, x:-30, y:0.5, z:-5},
                {  id: 10, value: 0.2, x:0, y:0.5, z:-5},
                {  id: 11, value: 0.2, x:0, y:0.5, z:7},
                {  id: 12, value: 0.2, x:30, y:0.5, z:7},
                {  id: 13, value: 0.2, x:0, y:0.5, z:18},
                {  id: 14, value: 0.2, x:-30, y:0.5, z:18},
                {  id: 15, value: 0.2, x:0, y:0.5, z:32},
                {  id: 16, value: 0.2, x:25, y:0.5, z:32},
                
				

			
			];

	
		var edges2 = [
				{ from: 1, to: 0, value: 3 },
				{ from: 2, to: 1, value: 3 },
				{ from: 3, to: 2, value: 3 },
			    { from: 4, to: 3, value: 3 },
				{ from: 5, to: 4, value: 3 },
                { from: 6, to: 5, value: 3 },
                { from: 7, to: 4, value: 3 },
                { from: 8, to: 7, value: 3 },
                { from: 9, to: 7, value: 3 },
                { from: 10, to: 9, value: 3 },
                { from: 11, to: 10, value: 3 },
                { from: 12, to: 10, value: 3 },
                { from: 13, to: 12, value: 3 },
                { from: 14, to: 12, value: 3 },
                { from: 15, to: 14, value: 3 },
			 	

			];

/////////////////////////////////

function init(){
	//////////////////////////////
	
	console.log(nodes);
            console.log(edges);
            console.log(nodes2);
            console.log(edges2);
	
	///////////////
	scene = new THREE.Scene();
	aspect = window.innerWidth / window.innerHeight;
            camera = new THREE.PerspectiveCamera(75, aspect, 0.1, 1000);
	renderer = new THREE.WebGLRenderer();
            renderer.setSize(window.innerWidth, window.innerHeight);
			
			///////////Materiales
			             var textureLoader = new THREE.TextureLoader();
			
            asphalt = textureLoader.load("Concreto2.jpg");
			aluminio = textureLoader.load("aluminnio.jpg");
			ladrillo = textureLoader.load("ladrillo.jpg");
			ladrillo3 = textureLoader.load("ladrillo3.jpg");
			paredgrafiti = textureLoader.load("paredgrafiti.png");
            prohibido = textureLoader.load("Prohibido.jpg");
            left = textureLoader.load("Left.jpg");
    
    
            right = textureLoader.load("Right.jpg");
   glass = textureLoader.load("Vidrioazul.jpg");
    
    
			asphalt.repeat.set(1, 1);
			
			
    
//ELEMENTOS COMUNES
             var size = 70;
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
    /////////////////////////////////
	
	var linematerial = new THREE.LineBasicMaterial({ color: 0x221fa5});
			var material2 = new THREE.MeshStandardMaterial( { color: 0x221fa5 } );
			
			var parent = new THREE.Object3D();
			
  //CREANDO LOS NODOS
			for(var i=0; i<nodes.length; i++){
				var sphereGeometry = new THREE.SphereGeometry( nodes[i].value, 0.2,0.2 );
				var sphere = new THREE.Mesh( sphereGeometry );
                sphere.applyMatrix( new THREE.Matrix4().makeScale(.2,.2,.2) );
				sphere.applyMatrix(new THREE.Matrix4().makeTranslation(nodes[i].x, nodes[i].y, nodes[i].z));
				sphere.material = material2;
				parent.add(sphere);
			}
			
			//CREANDO LAS ARISTAS
			for(var i=0; i<edges.length; i++){
				var points = [];
					points.push( new THREE.Vector3( nodes[edges[i].from].x, 
													nodes[edges[i].from].y, 
													nodes[edges[i].from].z ) );
					points.push( new THREE.Vector3( nodes[edges[i].to].x, 
													nodes[edges[i].to].y, 
													nodes[edges[i].to].z ) );
				var geometry = new THREE.BufferGeometry().setFromPoints( points );
				var line = new THREE.Line( geometry, linematerial );
				parent.add(line);
			}
			
			scene.add( parent );
/////////////////////////////////////////////////////
            
             var linematerial2 = new THREE.LineBasicMaterial({ color: 0xcf5d5d });
			var material3 = new THREE.MeshStandardMaterial( { color: 0xcf5d5d  } );
			
			var parent2 = new THREE.Object3D();
          		
 //CREANDO LOS NODOS DOS
			for(var i=0; i<nodes2.length; i++){
				var sphereGeometry = new THREE.SphereGeometry( nodes2[i].value, 0.2,0.2 );
				var sphere = new THREE.Mesh( sphereGeometry );
                sphere.applyMatrix( new THREE.Matrix4().makeScale(.2,.2,.2) );
				sphere.applyMatrix(new THREE.Matrix4().makeTranslation(nodes2[i].x, nodes2[i].y, nodes2[i].z));
				sphere.material = material3;
				parent.add(sphere);
			}
			
			//CREANDO LAS ARISTAS
			for(var i=0; i<edges2.length; i++){
				var points = [];
					points.push( new THREE.Vector3( nodes2[edges2[i].from].x, 
													nodes2[edges[i].from].y, 
													nodes2[edges2[i].from].z ) );
					points.push( new THREE.Vector3( nodes2[edges2[i].to].x, 
													nodes2[edges2[i].to].y, 
													nodes2[edges2[i].to].z ) );
				var geometry = new THREE.BufferGeometry().setFromPoints( points );
				var line = new THREE.Line( geometry, linematerial2 );
				parent2.add(line);
			}
			
			scene.add( parent2 );			
	
	//////////////////////////////////
    
    
    //GEO
    
    //VENTANAS DE CASAS Y EDIFICIOS
    
    var geometry = new THREE.CircleBufferGeometry( 1.8, 32 );
var material = new THREE.MeshStandardMaterial( { color: 0x00FFFF, side: THREE.DoubleSide, metalness: 0.4, map:glass } );
var v1 = new THREE.Mesh( geometry, material );
scene.add( v1 );
	
   v1.position.x= -11;
             v1.position.y= 7;
            v1.position.z= 4.3;
    
    
    v1.rotation.x= 0;
             v1.rotation.y= 12.5;
            v1.rotation.z= 0;
    

    var geometry = new THREE.CircleBufferGeometry( 1.8, 32 );
var material = new THREE.MeshStandardMaterial( { color: 0x00FFFF, side: THREE.DoubleSide, metalness: 0.4, map:glass } );
var v2 = new THREE.Mesh( geometry, material );
scene.add( v2 );
	
           v2.position.x= -11;
         v2.position.y= 7;
            v2.position.z= 10;
    
    
    v2.rotation.x= 0;
             v2.rotation.y= 12.5;
            v2.rotation.z= 0;
    
      var geometry = new THREE.CircleBufferGeometry( 1.8, 32 );
var material = new THREE.MeshStandardMaterial( { color: 0x00FFFF, side: THREE.DoubleSide, metalness: 0.4, map:glass } );
var v1 = new THREE.Mesh( geometry, material );
scene.add( v1 );
	
           v1.position.x= -13;
         v1.position.y= 7;
            v1.position.z= 22.8;
    
    
    v1.rotation.x= 0;
             v1.rotation.y= 12.5;
            v1.rotation.z= 0;
    
     var geometry = new THREE.CircleBufferGeometry( 1.8, 32 );
var material = new THREE.MeshStandardMaterial( { color: 0x00FFFF, side: THREE.DoubleSide, metalness: 0.4, map:glass } );
var v1 = new THREE.Mesh( geometry, material );
scene.add( v1 );
	
           v1.position.x= -20;
         v1.position.y= 7;
            v1.position.z= 22.8;
    
    
    v1.rotation.x= 0;
             v1.rotation.y= 12.5;
            v1.rotation.z= 0;
    
         var geometry = new THREE.CircleBufferGeometry( 1.8, 32 );
var material = new THREE.MeshStandardMaterial( { color: 0x00FFFF, side: THREE.DoubleSide, metalness: 0.4, map:glass } );
var v1 = new THREE.Mesh( geometry, material );
scene.add( v1 );
	
           v1.position.x= -27;
         v1.position.y= 7;
            v1.position.z= 22.8;
    
    
    v1.rotation.x= 0;
             v1.rotation.y= 12.5;
            v1.rotation.z= 0;
    
    
    var geometry = new THREE.CircleBufferGeometry( 1.8, 32 );
var material = new THREE.MeshStandardMaterial( { color: 0x00FFFF, side: THREE.DoubleSide, metalness: 0.4, map:glass } );
var v1 = new THREE.Mesh( geometry, material );
scene.add( v1 );
	
           v1.position.x= 20;
         v1.position.y= 7;
            v1.position.z= 23.3;
    
    
    v1.rotation.x= 0;
             v1.rotation.y= 12.5;
            v1.rotation.z= 0;
 
    var geometry = new THREE.CircleBufferGeometry( 1.8, 32 );
var material = new THREE.MeshStandardMaterial( { color: 0x00FFFF, side: THREE.DoubleSide, metalness: 0.4, map:glass } );
var v1 = new THREE.Mesh( geometry, material );
scene.add( v1 );
	
           v1.position.x= 21.5;
         v1.position.y= 7;
            v1.position.z= 1;
    
    
    v1.rotation.x= 0;
             v1.rotation.y= 12.5;
            v1.rotation.z= 0;
    
        var geometry = new THREE.CircleBufferGeometry( 1.8, 32 );
var material = new THREE.MeshStandardMaterial( { color: 0x00FFFF, side: THREE.DoubleSide, metalness: 0.4, map:glass } );
var v1 = new THREE.Mesh( geometry, material );
scene.add( v1 );
	
           v1.position.x= 17;
         v1.position.y= 7;
            v1.position.z= -6.8;
    
    
    v1.rotation.x= 0;
             v1.rotation.y= 12.5;
            v1.rotation.z= 0;
 
    
    var geometry = new THREE.PlaneBufferGeometry( 20, 5, 32 );
var material = new THREE.MeshStandardMaterial( {color: 0x00FFFF, side: THREE.DoubleSide, map:glass} );
var p1 = new THREE.Mesh( geometry, material );
scene.add( p1 );
    
   p1.position.x= -0.8;
         p1.position.y= 6.5;
            p1.position.z= -26.8;
    
    
          p1.rotation.x= 0;
            p1.rotation.y= 12.57;
            p1.rotation.z= 0;
 
var geometry = new THREE.CircleBufferGeometry( 1.8, 32 );
var material = new THREE.MeshStandardMaterial( { color: 0x00FFFF, side: THREE.DoubleSide, metalness: 0.4, map:glass } );
var v1 = new THREE.Mesh( geometry, material );
scene.add( v1 );
	
   v1.position.x= -25;
             v1.position.y= 7;
            v1.position.z= -10.7;
    
    
    v1.rotation.x= 0;
             v1.rotation.y= 12.5;
            v1.rotation.z= 0;
    
    
     var geometry = new THREE.CircleBufferGeometry( 1.8, 32 );
var material = new THREE.MeshStandardMaterial( { color: 0x00FFFF, side: THREE.DoubleSide, metalness: 0.4, map:glass } );
var v1 = new THREE.Mesh( geometry, material );
scene.add( v1 );
	
   v1.position.x= -20;
             v1.position.y= 7;
            v1.position.z= -0.65;
    
    
    v1.rotation.x= 0;
             v1.rotation.y= 12.5;
            v1.rotation.z= 0;
	//POSTES DE Luz
            
            //POSTE 1
			var grupo = new THREE.Group();
            
var geometry = new THREE.CylinderBufferGeometry( 1.2, 1.2, 25, 32 );
var materialPoste = new THREE.MeshPhongMaterial( {color: 0x9b9b9b, map:asphalt} );
var post1 = new THREE.Mesh( geometry, materialPoste );
grupo.add( post1 );
            
            post1.position.x= 0;
             post1.position.y= 12.5;
            post1.position.z= -30;
            
         var geometry = new THREE.CylinderBufferGeometry( 1.2, 1.2, 8, 32 );
var materialPoste = new THREE.MeshPhongMaterial( {color: 0x9b9b9b, map:asphalt} );
var post12 = new THREE.Mesh( geometry, materialPoste );
grupo.add( post12 );
            
            post12.position.x= 0;
             post12.position.y= 26;
            post12.position.z= -26;
            
              post12.rotation.x= 1.57;
             post12.rotation.y= 12.5;
            post12.rotation.z= 0;
            
            var geometry = new THREE.BoxGeometry( 2, 2, 2);
var materialPoste = new THREE.MeshPhongMaterial( {color: 0x9b9b9b, map:asphalt} );
var cube1 = new THREE.Mesh( geometry, materialPoste );
grupo.add( cube1);
            
            cube1.position.x= 0;
             cube1.position.y= 26;
            cube1.position.z= -30;
            
             var geometry = new THREE.CylinderBufferGeometry( 1.2, 3, 3, 32 );
var materialPoste = new THREE.MeshBasicMaterial( {color: 0x9b9b9b, map:aluminio} );
var post13 = new THREE.Mesh( geometry, materialPoste );
grupo.add( post13 );
            
            post13.position.x= 0;
             post13.position.y= 24.4;
            post13.position.z= -23;
            
             // BOMBILLA POSTE 1
            
 var geometry = new THREE.SphereGeometry( 1.5, 32, 32 );
var materialPoste = new THREE.MeshBasicMaterial( {color: 0xFAFAD2} );
var sphere1 = new THREE.Mesh( geometry, materialPoste );
grupo.add( sphere1 );

            
             sphere1.position.x= 0;
             sphere1.position.y= 23;
            sphere1.position.z= -23;
			
			/////Luz poste 1
			var pointLight1 = new THREE.PointLight(0xFAFAD2, 1, 12);
            pointLight1.position.set(0, 23, -23);
            grupo.add(pointLight1);
			
/////////////Grupo poste
		scene.add(grupo);
		grupo.applyMatrix( new THREE.Matrix4().makeScale(.4,.4,.4) );
		grupo.applyMatrix( new THREE.Matrix4().makeTranslation(0,0,0) );
		grupo1 = grupo.clone();
		grupo1.applyMatrix( new THREE.Matrix4().makeTranslation(12,0,12) );
    
		grupo2 = grupo.clone();
		grupo2.applyMatrix( new THREE.Matrix4().makeTranslation(12,0,12) );
    
    grupo2.position.x=6;
    grupo2.position.z=6;
    grupo2.rotation.y=1.5;
    
    
    
		grupo3 = grupo.clone();
		grupo3.applyMatrix( new THREE.Matrix4().makeTranslation(12,0,12) );
    
     grupo3.position.x=6;
    grupo3.position.z=30;
    grupo3.rotation.y=1.5;
    
    
		grupo4 = grupo.clone();
		grupo4.applyMatrix( new THREE.Matrix4().makeTranslation(12,0,12) );
    
       grupo4.position.x=30;
    grupo4.position.z=5;
    grupo4.rotation.y=3;
    
		grupo5 = grupo.clone();
		grupo5.applyMatrix( new THREE.Matrix4().makeTranslation(12,0,12) );
    
       grupo5.position.x=-29;
    grupo5.position.z=-10;
    grupo5.rotation.y=3;
    
		grupo6 = grupo.clone();
		grupo6.applyMatrix( new THREE.Matrix4().makeTranslation(12,0,12) );
    
      grupo6.position.x=-20;
    grupo6.position.z=-13;
    grupo6.rotation.y=0.3;
    
		grupo7 = grupo.clone();
		grupo7.applyMatrix( new THREE.Matrix4().makeTranslation(12,0,12) );
    
    grupo7.position.x=20;
    grupo7.position.z=-13;
    grupo7.rotation.y=0.3;
    
		grupo8 = grupo.clone();
		grupo8.applyMatrix( new THREE.Matrix4().makeTranslation(12,0,12) );
    
    grupo8.position.x=0;
    grupo8.position.z=24;
    grupo8.rotation.y=5;
    
		grupo9 = grupo.clone();
		grupo9.applyMatrix( new THREE.Matrix4().makeTranslation(12,0,12) );
		scene.add(grupo1);scene.add(grupo2);scene.add(grupo3);scene.add(grupo4);scene.add(grupo5);
		scene.add(grupo6 );scene.add(grupo7);scene.add(grupo8);
			
			
			/////////////////////////////
    
	meshFloor = new THREE.Mesh(
		new THREE.PlaneGeometry(70,70, 70,70),
		// MeshBasicMaterial does not react to lighting, so we replace with MeshPhongMaterial
		new THREE.MeshPhongMaterial({color:0x35682d, wireframe:USE_WIREFRAME})
		// See threejs.org/examples/ for other material types
		
		
	);
	meshFloor.rotation.x -= Math.PI / 2;
	// Floor can have shadows cast onto it
	meshFloor.receiveShadow = true;
	scene.add(meshFloor);
  
// CARRETERA
    
            var geoVia = new THREE.BoxGeometry( 70, 0.2, 70 , 70);
            var geoVia1 = new THREE.BoxGeometry( 35, 1, 15 , 10);
            var geoVia2 = new THREE.BoxGeometry( 55, 1, 15 , 10);
            
            var geoVia3 = new THREE.BoxGeometry( 60, 1, 5 , 10);
            var matVia= new THREE.MeshPhongMaterial( {color: 0x787878, side: THREE.DoubleSide} );
           
            var Via1 = new THREE.Mesh( geoVia, matVia );
            var Via2 = new THREE.Mesh( geoVia1, matVia );
            var Via3 = new THREE.Mesh( geoVia1, matVia );
            var Via4 = new THREE.Mesh( geoVia1, matVia );
            var Via5 = new THREE.Mesh( geoVia1, matVia );
            var Via6 = new THREE.Mesh( geoVia2, matVia );
            
            var Via7= new THREE.Mesh( geoVia3, matVia );
            var Via8= new THREE.Mesh( geoVia3, matVia );
            
            
            Via2.position.x=25;
            Via2.position.z=20;
           
            
            Via3.position.x=-20;
            Via3.position.z=30;
            
            Via4.position.x=-20;
            Via4.position.z=5;
            
            Via5.position.x=25;
            Via5.position.z=-5;
            
            Via6.position.x=0;
            Via6.position.z=-30;
            
            Via7.position.x=20;
            Via7.position.z=-12.5;
            
             
            Via8.position.x=-50;
            Via8.position.z=-12.5;

            var Via1CSG = THREE.CSG.fromMesh(Via1);
            var Via2CSG = THREE.CSG.fromMesh(Via2);
            var Via3CSG = THREE.CSG.fromMesh(Via3);
            var Via4CSG = THREE.CSG.fromMesh(Via4);
            var Via5CSG = THREE.CSG.fromMesh(Via5);
            var Via6CSG = THREE.CSG.fromMesh(Via6);
            var Via7CSG = THREE.CSG.fromMesh(Via7);
            var Via8CSG = THREE.CSG.fromMesh(Via8);
              
    
      //SEÑALES DE TRÁNSITO
            
            //Prohibido Parquear
            
            var geometry = new THREE.CylinderBufferGeometry( 0.3, 0.3, 12, 32 );
var material = new THREE.MeshPhongMaterial( {color: 0xffffff} );
var signal1 = new THREE.Mesh( geometry, material );
scene.add( signal1 );
            
    	signal1.applyMatrix( new THREE.Matrix4().makeScale(.4,.4,.4) );
            signal1.position.x= -34;
             signal1.position.y= 2;
            signal1.position.z= -2;
            
              var geometry = new THREE.CylinderBufferGeometry( 1, 1, 0.5, 32 );
var material = new THREE.MeshPhongMaterial( {color: 0xffffff, map:prohibido} );
var signal12 = new THREE.Mesh( geometry, material );
scene.add( signal12 );
            
          
    	signal12.applyMatrix( new THREE.Matrix4().makeScale(.7,.7,.7) );
            signal12.position.x= -34;
             signal12.position.y= 5;
            signal12.position.z= -2;
            
            signal12.rotation.x= 1.57;
            signal12.rotation.y= 0;
            signal12.rotation.z= 1.57;
            
            
            //Derecha
            
             var geometry = new THREE.CylinderBufferGeometry( 0.3, 0.3, 13, 32 );
var material = new THREE.MeshPhongMaterial( {color: 0xffffff} );
var signal2 = new THREE.Mesh( geometry, material );
scene.add( signal2 );
            
          
    	signal2.applyMatrix( new THREE.Matrix4().makeScale(.4,.4,.4) );
            signal2.position.x= -3;
             signal2.position.y= 2;
            signal2.position.z= 33;
            
              var geometry = new THREE.CylinderBufferGeometry( 1, 1, 0.5, 32 );
var material = new THREE.MeshPhongMaterial( {color: 0xffffff, map:right} );
var signal21 = new THREE.Mesh( geometry, material );
scene.add( signal21 );
            
          
    	signal21.applyMatrix( new THREE.Matrix4().makeScale(.7,.7,.7) );
            signal21.position.x= -3;
             signal21.position.y= 5;
            signal21.position.z= 33;
            
            signal21.rotation.x= 1.57;
            signal21.rotation.y= 0;
            signal21.rotation.z= 1.57;
            
            //Izquierda
            
                 var geometry = new THREE.CylinderBufferGeometry( 0.3, 0.3, 17, 32 );
var material = new THREE.MeshPhongMaterial( {color: 0xffffff} );
var signal3 = new THREE.Mesh( geometry, material );
scene.add( signal3 );
            
          
    	signal3.applyMatrix( new THREE.Matrix4().makeScale(.4,.4,.4) );
            signal3.position.x= 7.5;
             signal3.position.y= 1;
            signal3.position.z= -10;
            
              var geometry = new THREE.CylinderBufferGeometry( 1, 1, 0.5, 32 );
var material = new THREE.MeshPhongMaterial( {color: 0xffffff, map:left} );
var signal31 = new THREE.Mesh( geometry, material );
scene.add( signal31 );
            
          
    	signal31.applyMatrix( new THREE.Matrix4().makeScale(.7,.7,.7) );
            signal31.position.x= 7.5;
             signal31.position.y= 5;
            signal31.position.z= -10;
            
            signal31.rotation.x= 1.57;
            signal31.rotation.y= 0;
            signal31.rotation.z= 0;
            
    
    //hacer Operaciones CSG

            var result1 = Via1CSG.subtract(Via2CSG).subtract(Via3CSG).subtract(Via4CSG).subtract(Via5CSG).subtract(Via6CSG).subtract(Via7CSG).subtract(Via8CSG);

            //compilar

            var Calle = THREE.CSG.toMesh(result1);
            Calle.material=matVia;
    
             scene.add(Calle);
			 
			  //LINEAS AMARILLAS CARRETERA
            
var geometry = new THREE.PlaneBufferGeometry( 0.5, 3, 32 );
var material = new THREE.MeshBasicMaterial( {color: 0xFFD700, side: THREE.DoubleSide} );
var l1 = new THREE.Mesh( geometry, material );
scene.add( l1 );
            
             l1.position.x= 33;
            l1.position.y= 0.2;
            l1.position.z= 31.5;
            
            l1.rotation.x= 1.57;
            l1.rotation.y= 0;
            l1.rotation.z= 1.57;
    
    var geometry = new THREE.PlaneBufferGeometry( 0.5, 3, 32 );
var material = new THREE.MeshBasicMaterial( {color: 0xFFD700, side: THREE.DoubleSide} );
var l2 = new THREE.Mesh( geometry, material );
scene.add( l2 );
            
             l2.position.x= 29;
            l2.position.y= 0.2;
            l2.position.z= 31.5;
            
            l2.rotation.x= 1.57;
            l2.rotation.y= 0;
            l2.rotation.z= 1.57;
    
     var geometry = new THREE.PlaneBufferGeometry( 0.5, 3, 32 );
var material = new THREE.MeshBasicMaterial( {color: 0xFFD700, side: THREE.DoubleSide} );
var l3 = new THREE.Mesh( geometry, material );
scene.add( l3 );
            
             l3.position.x= 25;
            l3.position.y= 0.2;
            l3.position.z= 31.5;
            
            l3.rotation.x= 1.57;
            l3.rotation.y= 0;
            l3.rotation.z= 1.57;
    
     var geometry = new THREE.PlaneBufferGeometry( 0.5, 3, 32 );
var material = new THREE.MeshBasicMaterial( {color: 0xFFD700, side: THREE.DoubleSide} );
var l4 = new THREE.Mesh( geometry, material );
scene.add( l4 );
            
             l4.position.x= 21;
            l4.position.y= 0.2;
            l4.position.z= 31.5;
            
            l4.rotation.x= 1.57;
            l4.rotation.y= 0;
            l4.rotation.z= 1.57;
    
     var geometry = new THREE.PlaneBufferGeometry( 0.5, 3, 32 );
var material = new THREE.MeshBasicMaterial( {color: 0xFFD700, side: THREE.DoubleSide} );
var l5 = new THREE.Mesh( geometry, material );
scene.add( l5 );
            
             l5.position.x= 17;
            l5.position.y= 0.2;
            l5.position.z= 31.5;
            
            l5.rotation.x= 1.57;
            l5.rotation.y= 0;
            l5.rotation.z= 1.57;
    
     var geometry = new THREE.PlaneBufferGeometry( 0.5, 3, 32 );
var material = new THREE.MeshBasicMaterial( {color: 0xFFD700, side: THREE.DoubleSide} );
var l6 = new THREE.Mesh( geometry, material );
scene.add( l6 );
            
             l6.position.x= 13;
            l6.position.y= 0.2;
            l6.position.z= 31.5;
            
            l6.rotation.x= 1.57;
            l6.rotation.y= 0;
            l6.rotation.z= 1.57;
    
      var geometry = new THREE.PlaneBufferGeometry( 0.5, 3, 32 );
var material = new THREE.MeshBasicMaterial( {color: 0xFFD700, side: THREE.DoubleSide} );
var l7 = new THREE.Mesh( geometry, material );
scene.add( l7 );
            
             l7.position.x= 9;
            l7.position.y= 0.2;
            l7.position.z= 31.5;
            
            l7.rotation.x= 1.57;
            l7.rotation.y= 0;
            l7.rotation.z= 1.57;
    
    
      var geometry = new THREE.PlaneBufferGeometry( 0.5, 3, 32 );
var material = new THREE.MeshBasicMaterial( {color: 0xFFD700, side: THREE.DoubleSide} );
var l8 = new THREE.Mesh( geometry, material );
scene.add( l8 );
            
             l8.position.x= 5;
            l8.position.y= 0.2;
            l8.position.z= 31.5;
            
            l8.rotation.x= 1.57;
            l8.rotation.y= 0;
            l8.rotation.z= 1.57;
    
    var geometry = new THREE.PlaneBufferGeometry( 0.5, 3, 32 );
var material = new THREE.MeshBasicMaterial( {color: 0xFFD700, side: THREE.DoubleSide} );
var l9 = new THREE.Mesh( geometry, material );
scene.add( l9 );
            
             l9.position.x= 2.5;
            l9.position.y= 0.2;
            l9.position.z= 28;
            
            l9.rotation.x= 1.57;
            l9.rotation.y= 0;
            l9.rotation.z= 0;
    
    var geometry = new THREE.PlaneBufferGeometry( 0.5, 3, 32 );
var material = new THREE.MeshBasicMaterial( {color: 0xFFD700, side: THREE.DoubleSide} );
var l10 = new THREE.Mesh( geometry, material );
scene.add( l10 );
            
             l10.position.x= 2.5;
            l10.position.y= 0.2;
            l10.position.z= 24;
            
            l10.rotation.x= 1.57;
            l10.rotation.y= 0;
            l10.rotation.z= 0;
    
    var geometry = new THREE.PlaneBufferGeometry( 0.5, 3, 32 );
var material = new THREE.MeshBasicMaterial( {color: 0xFFD700, side: THREE.DoubleSide} );
var l10 = new THREE.Mesh( geometry, material );
scene.add( l10 );
            
             l10.position.x= 2.5;
            l10.position.y= 0.2;
            l10.position.z= 20;
            
            l10.rotation.x= 1.57;
            l10.rotation.y= 0;
            l10.rotation.z= 0;
    
      var geometry = new THREE.PlaneBufferGeometry( 0.5, 3, 32 );
var material = new THREE.MeshBasicMaterial( {color: 0xFFD700, side: THREE.DoubleSide} );
var l10 = new THREE.Mesh( geometry, material );
scene.add( l10 );
            
             l10.position.x= 2.5;
            l10.position.y= 0.2;
            l10.position.z= 16;
            
            l10.rotation.x= 1.57;
            l10.rotation.y= 0;
            l10.rotation.z= 0;
    
       var geometry = new THREE.PlaneBufferGeometry( 0.5, 3, 32 );
var material = new THREE.MeshBasicMaterial( {color: 0xFFD700, side: THREE.DoubleSide} );
var l10 = new THREE.Mesh( geometry, material );
scene.add( l10 );
            
             l10.position.x= 2.5;
            l10.position.y= 0.2;
            l10.position.z= 12;
            
            l10.rotation.x= 1.57;
            l10.rotation.y= 0;
            l10.rotation.z= 0;
    
     var geometry = new THREE.PlaneBufferGeometry( 0.5, 3, 32 );
var material = new THREE.MeshBasicMaterial( {color: 0xFFD700, side: THREE.DoubleSide} );
var l10 = new THREE.Mesh( geometry, material );
scene.add( l10 );
            
             l10.position.x=2.5;
            l10.position.y= 0.2;
            l10.position.z= 8;
            
            l10.rotation.x= 1.57;
            l10.rotation.y= 0;
            l10.rotation.z= 0;
    
     var geometry = new THREE.PlaneBufferGeometry( 0.5, 3, 32 );
var material = new THREE.MeshBasicMaterial( {color: 0xFFD700, side: THREE.DoubleSide} );
var l10 = new THREE.Mesh( geometry, material );
scene.add( l10 );
            
             l10.position.x= 2.5;
            l10.position.y= 0.2;
            l10.position.z= 4;
            
            l10.rotation.x= 1.57;
            l10.rotation.y= 0;
            l10.rotation.z= 0;
    
        var geometry = new THREE.PlaneBufferGeometry( 0.5, 3, 32 );
var material = new THREE.MeshBasicMaterial( {color: 0xFFD700, side: THREE.DoubleSide} );
var l10 = new THREE.Mesh( geometry, material );
scene.add( l10 );
            
             l10.position.x= 2.5;
            l10.position.y= 0.2;
            l10.position.z= 0;
            
            l10.rotation.x= 1.57;
            l10.rotation.y= 0;
            l10.rotation.z= 0;
    
      var geometry = new THREE.PlaneBufferGeometry( 0.5, 3, 32 );
var material = new THREE.MeshBasicMaterial( {color: 0xFFD700, side: THREE.DoubleSide} );
var l10 = new THREE.Mesh( geometry, material );
scene.add( l10 );
            
             l10.position.x= 2.5;
            l10.position.y= 0.2;
            l10.position.z= -4;
            
            l10.rotation.x= 1.57;
            l10.rotation.y= 0;
            l10.rotation.z= 0;
    
    var geometry = new THREE.PlaneBufferGeometry( 0.5, 3, 32 );
var material = new THREE.MeshBasicMaterial( {color: 0xFFD700, side: THREE.DoubleSide} );
var l10 = new THREE.Mesh( geometry, material );
scene.add( l10 );
            
             l10.position.x= -1;
            l10.position.y= 0.2;
            l10.position.z= -6;
            
            l10.rotation.x= 1.57;
            l10.rotation.y= 0;
            l10.rotation.z= 1.57;
    
    var geometry = new THREE.PlaneBufferGeometry( 0.5, 3, 32 );
var material = new THREE.MeshBasicMaterial( {color: 0xFFD700, side: THREE.DoubleSide} );
var l10 = new THREE.Mesh( geometry, material );
scene.add( l10 );
            
             l10.position.x= -5;
            l10.position.y= 0.2;
            l10.position.z= -6;
            
            l10.rotation.x= 1.57;
            l10.rotation.y= 0;
            l10.rotation.z= 1.57;
    
     var geometry = new THREE.PlaneBufferGeometry( 0.5, 3, 32 );
var material = new THREE.MeshBasicMaterial( {color: 0xFFD700, side: THREE.DoubleSide} );
var l10 = new THREE.Mesh( geometry, material );
scene.add( l10 );
            
             l10.position.x= -9;
            l10.position.y= 0.2;
            l10.position.z= -6;
            
            l10.rotation.x= 1.57;
            l10.rotation.y= 0;
            l10.rotation.z= 1.57;
    
      var geometry = new THREE.PlaneBufferGeometry( 0.5, 3, 32 );
var material = new THREE.MeshBasicMaterial( {color: 0xFFD700, side: THREE.DoubleSide} );
var l10 = new THREE.Mesh( geometry, material );
scene.add( l10 );
            
             l10.position.x= -13;
            l10.position.y= 0.2;
            l10.position.z= -6;
            
            l10.rotation.x= 1.57;
            l10.rotation.y= 0;
            l10.rotation.z= 1.57;
    
    var geometry = new THREE.PlaneBufferGeometry( 0.5, 3, 32 );
var material = new THREE.MeshBasicMaterial( {color: 0xFFD700, side: THREE.DoubleSide} );
var l10 = new THREE.Mesh( geometry, material );
scene.add( l10 );
            
             l10.position.x= -17;
            l10.position.y= 0.2;
            l10.position.z= -6;
            
            l10.rotation.x= 1.57;
            l10.rotation.y= 0;
            l10.rotation.z= 1.57;
    
     var geometry = new THREE.PlaneBufferGeometry( 0.5, 3, 32 );
var material = new THREE.MeshBasicMaterial( {color: 0xFFD700, side: THREE.DoubleSide} );
var l10 = new THREE.Mesh( geometry, material );
scene.add( l10 );
            
             l10.position.x= -21;
            l10.position.y= 0.2;
            l10.position.z= -6;
            
            l10.rotation.x= 1.57;
            l10.rotation.y= 0;
            l10.rotation.z= 1.57;
    
      var geometry = new THREE.PlaneBufferGeometry( 0.5, 3, 32 );
var material = new THREE.MeshBasicMaterial( {color: 0xFFD700, side: THREE.DoubleSide} );
var l10 = new THREE.Mesh( geometry, material );
scene.add( l10 );
            
             l10.position.x= -25;
            l10.position.y= 0.2;
            l10.position.z= -6;
            
            l10.rotation.x= 1.57;
            l10.rotation.y= 0;
            l10.rotation.z= 1.57;
    
      var geometry = new THREE.PlaneBufferGeometry( 0.5, 3, 32 );
var material = new THREE.MeshBasicMaterial( {color: 0xFFD700, side: THREE.DoubleSide} );
var l10 = new THREE.Mesh( geometry, material );
scene.add( l10 );
            
             l10.position.x= -29;
            l10.position.y= 0.2;
            l10.position.z= -6;
            
            l10.rotation.x= 1.57;
            l10.rotation.y= 0;
            l10.rotation.z= 1.57;
    
          var geometry = new THREE.PlaneBufferGeometry( 0.5, 3, 32 );
var material = new THREE.MeshBasicMaterial( {color: 0xFFD700, side: THREE.DoubleSide} );
var l10 = new THREE.Mesh( geometry, material );
scene.add( l10 );
            
             l10.position.x= -33;
            l10.position.y= 0.2;
            l10.position.z= -6;
            
            l10.rotation.x= 1.57;
            l10.rotation.y= 0;
            l10.rotation.z= 1.57;
    
           var geometry = new THREE.PlaneBufferGeometry( 0.5, 3, 32 );
var material = new THREE.MeshBasicMaterial( {color: 0xFFD700, side: THREE.DoubleSide} );
var l10 = new THREE.Mesh( geometry, material );
scene.add( l10 );
            
             l10.position.x= -33;
            l10.position.y= 0.2;
            l10.position.z= -18;
            
            l10.rotation.x= 1.57;
            l10.rotation.y= 0;
            l10.rotation.z= 1.57;
    
       var geometry = new THREE.PlaneBufferGeometry( 0.5, 3, 32 );
var material = new THREE.MeshBasicMaterial( {color: 0xFFD700, side: THREE.DoubleSide} );
var l10 = new THREE.Mesh( geometry, material );
scene.add( l10 );
            
             l10.position.x= -29;
            l10.position.y= 0.2;
            l10.position.z= -18;
            
            l10.rotation.x= 1.57;
            l10.rotation.y= 0;
            l10.rotation.z= 1.57;
    
           var geometry = new THREE.PlaneBufferGeometry( 0.5, 3, 32 );
var material = new THREE.MeshBasicMaterial( {color: 0xFFD700, side: THREE.DoubleSide} );
var l10 = new THREE.Mesh( geometry, material );
scene.add( l10 );
            
             l10.position.x= -25;
            l10.position.y= 0.2;
            l10.position.z= -18;
            
            l10.rotation.x= 1.57;
            l10.rotation.y= 0;
            l10.rotation.z= 1.57;
    
     var geometry = new THREE.PlaneBufferGeometry( 0.5, 3, 32 );
var material = new THREE.MeshBasicMaterial( {color: 0xFFD700, side: THREE.DoubleSide} );
var l10 = new THREE.Mesh( geometry, material );
scene.add( l10 );
            
             l10.position.x= -21;
            l10.position.y= 0.2;
            l10.position.z= -18;
            
            l10.rotation.x= 1.57;
            l10.rotation.y= 0;
            l10.rotation.z= 1.57;
    
     var geometry = new THREE.PlaneBufferGeometry( 0.5, 3, 32 );
var material = new THREE.MeshBasicMaterial( {color: 0xFFD700, side: THREE.DoubleSide} );
var l10 = new THREE.Mesh( geometry, material );
scene.add( l10 );
            
             l10.position.x= -17;
            l10.position.y= 0.2;
            l10.position.z= -18;
            
            l10.rotation.x= 1.57;
            l10.rotation.y= 0;
            l10.rotation.z= 1.57;
    
     var geometry = new THREE.PlaneBufferGeometry( 0.5, 3, 32 );
var material = new THREE.MeshBasicMaterial( {color: 0xFFD700, side: THREE.DoubleSide} );
var l10 = new THREE.Mesh( geometry, material );
scene.add( l10 );
            
             l10.position.x= -13;
            l10.position.y= 0.2;
            l10.position.z= -18;
            
            l10.rotation.x= 1.57;
            l10.rotation.y= 0;
            l10.rotation.z= 1.57;
    
     var geometry = new THREE.PlaneBufferGeometry( 0.5, 3, 32 );
var material = new THREE.MeshBasicMaterial( {color: 0xFFD700, side: THREE.DoubleSide} );
var l10 = new THREE.Mesh( geometry, material );
scene.add( l10 );
            
             l10.position.x= -9;
            l10.position.y= 0.2;
            l10.position.z= -18;
            
            l10.rotation.x= 1.57;
            l10.rotation.y= 0;
            l10.rotation.z= 1.57;
    
     var geometry = new THREE.PlaneBufferGeometry( 0.5, 3, 32 );
var material = new THREE.MeshBasicMaterial( {color: 0xFFD700, side: THREE.DoubleSide} );
var l10 = new THREE.Mesh( geometry, material );
scene.add( l10 );
            
             l10.position.x= -5;
            l10.position.y= 0.2;
            l10.position.z= -18;
            
            l10.rotation.x= 1.57;
            l10.rotation.y= 0;
            l10.rotation.z= 1.57;
    
     var geometry = new THREE.PlaneBufferGeometry( 0.5, 3, 32 );
var material = new THREE.MeshBasicMaterial( {color: 0xFFD700, side: THREE.DoubleSide} );
var l10 = new THREE.Mesh( geometry, material );
scene.add( l10 );
            
             l10.position.x= -1;
            l10.position.y= 0.2;
            l10.position.z= -18;
            
            l10.rotation.x= 1.57;
            l10.rotation.y= 0;
            l10.rotation.z= 1.57;
    
     var geometry = new THREE.PlaneBufferGeometry( 0.5, 3, 32 );
var material = new THREE.MeshBasicMaterial( {color: 0xFFD700, side: THREE.DoubleSide} );
var l10 = new THREE.Mesh( geometry, material );
scene.add( l10 );
            
             l10.position.x= 3;
            l10.position.y= 0.2;
            l10.position.z= -18;
            
            l10.rotation.x= 1.57;
            l10.rotation.y= 0;
            l10.rotation.z= 1.57;
    
     var geometry = new THREE.PlaneBufferGeometry( 0.5, 3, 32 );
var material = new THREE.MeshBasicMaterial( {color: 0xFFD700, side: THREE.DoubleSide} );
var l10 = new THREE.Mesh( geometry, material );
scene.add( l10 );
            
             l10.position.x= 7;
            l10.position.y= 0.2;
            l10.position.z= -18;
            
            l10.rotation.x= 1.57;
            l10.rotation.y= 0;
            l10.rotation.z= 1.57;
    
     var geometry = new THREE.PlaneBufferGeometry( 0.5, 3, 32 );
var material = new THREE.MeshBasicMaterial( {color: 0xFFD700, side: THREE.DoubleSide} );
var l10 = new THREE.Mesh( geometry, material );
scene.add( l10 );
            
             l10.position.x=11;
            l10.position.y= 0.2;
            l10.position.z= -18;
            
            l10.rotation.x= 1.57;
            l10.rotation.y= 0;
            l10.rotation.z= 1.57;
    
     var geometry = new THREE.PlaneBufferGeometry( 0.5, 3, 32 );
var material = new THREE.MeshBasicMaterial( {color: 0xFFD700, side: THREE.DoubleSide} );
var l10 = new THREE.Mesh( geometry, material );
scene.add( l10 );
            
             l10.position.x= 15;
            l10.position.y= 0.2;
            l10.position.z= -18;
            
            l10.rotation.x= 1.57;
            l10.rotation.y= 0;
            l10.rotation.z= 1.57;
    
     var geometry = new THREE.PlaneBufferGeometry( 0.5, 3, 32 );
var material = new THREE.MeshBasicMaterial( {color: 0xFFD700, side: THREE.DoubleSide} );
var l10 = new THREE.Mesh( geometry, material );
scene.add( l10 );
            
             l10.position.x= 19;
            l10.position.y= 0.2;
            l10.position.z= -18;
            
            l10.rotation.x= 1.57;
            l10.rotation.y= 0;
            l10.rotation.z= 1.57;
    
     var geometry = new THREE.PlaneBufferGeometry( 0.5, 3, 32 );
var material = new THREE.MeshBasicMaterial( {color: 0xFFD700, side: THREE.DoubleSide} );
var l10 = new THREE.Mesh( geometry, material );
scene.add( l10 );
            
             l10.position.x= 23;
            l10.position.y= 0.2;
            l10.position.z= -18;
            
            l10.rotation.x= 1.57;
            l10.rotation.y= 0;
            l10.rotation.z= 1.57;
    
     var geometry = new THREE.PlaneBufferGeometry( 0.5, 3, 32 );
var material = new THREE.MeshBasicMaterial( {color: 0xFFD700, side: THREE.DoubleSide} );
var l10 = new THREE.Mesh( geometry, material );
scene.add( l10 );
            
             l10.position.x= 27;
            l10.position.y= 0.2;
            l10.position.z= -18;
            
            l10.rotation.x= 1.57;
            l10.rotation.y= 0;
            l10.rotation.z= 1.57;
    
     var geometry = new THREE.PlaneBufferGeometry( 0.5, 3, 32 );
var material = new THREE.MeshBasicMaterial( {color: 0xFFD700, side: THREE.DoubleSide} );
var l10 = new THREE.Mesh( geometry, material );
scene.add( l10 );
            
             l10.position.x= 31;
            l10.position.y= 0.2;
            l10.position.z= -18;
            
            l10.rotation.x= 1.57;
            l10.rotation.y= 0;
            l10.rotation.z= 1.57;
    
     var geometry = new THREE.PlaneBufferGeometry( 0.5, 3, 32 );
var material = new THREE.MeshBasicMaterial( {color: 0xFFD700, side: THREE.DoubleSide} );
var l10 = new THREE.Mesh( geometry, material );
scene.add( l10 );
            
             l10.position.x= 31;
            l10.position.y= 0.2;
            l10.position.z= -24;
            
            l10.rotation.x= 1.57;
            l10.rotation.y= 0;
            l10.rotation.z= 0;
    
    
        var geometry = new THREE.PlaneBufferGeometry( 0.5, 3, 32 );
var material = new THREE.MeshBasicMaterial( {color: 0xFFD700, side: THREE.DoubleSide} );
var l10 = new THREE.Mesh( geometry, material );
scene.add( l10 );
            
             l10.position.x= 31;
            l10.position.y= 0.2;
            l10.position.z= -28;
            
            l10.rotation.x= 1.57;
            l10.rotation.y= 0;
            l10.rotation.z= 0;
    
    
        var geometry = new THREE.PlaneBufferGeometry( 0.5, 3, 32 );
var material = new THREE.MeshBasicMaterial( {color: 0xFFD700, side: THREE.DoubleSide} );
var l10 = new THREE.Mesh( geometry, material );
scene.add( l10 );
            
             l10.position.x= 31;
            l10.position.y= 0.2;
            l10.position.z= -32;
            
            l10.rotation.x= 1.57;
            l10.rotation.y= 0;
            l10.rotation.z= 0;
    
    var geometry = new THREE.PlaneBufferGeometry( 0.5, 3, 32 );
var material = new THREE.MeshBasicMaterial( {color: 0xFFD700, side: THREE.DoubleSide} );
var l10 = new THREE.Mesh( geometry, material );
scene.add( l10 );
            
             l10.position.x= -31;
            l10.position.y= 0.2;
            l10.position.z= -32;
            
            l10.rotation.x= 1.57;
            l10.rotation.y= 0;
            l10.rotation.z= 0;
    
    var geometry = new THREE.PlaneBufferGeometry( 0.5, 3, 32 );
var material = new THREE.MeshBasicMaterial( {color: 0xFFD700, side: THREE.DoubleSide} );
var l10 = new THREE.Mesh( geometry, material );
scene.add( l10 );
            
             l10.position.x= -31;
            l10.position.y= 0.2;
            l10.position.z= -28;
            
            l10.rotation.x= 1.57;
            l10.rotation.y= 0;
            l10.rotation.z= 0;
    
     
    var geometry = new THREE.PlaneBufferGeometry( 0.5, 3, 32 );
var material = new THREE.MeshBasicMaterial( {color: 0xFFD700, side: THREE.DoubleSide} );
var l10 = new THREE.Mesh( geometry, material );
scene.add( l10 );
            
             l10.position.x= -31;
            l10.position.y= 0.2;
            l10.position.z= -24;
            
            l10.rotation.x= 1.57;
            l10.rotation.y= 0;
            l10.rotation.z= 0;
    
    var geometry = new THREE.PlaneBufferGeometry( 0.5, 3, 32 );
var material = new THREE.MeshBasicMaterial( {color: 0xFFD700, side: THREE.DoubleSide} );
var l1 = new THREE.Mesh( geometry, material );
scene.add( l1 );
            
             l1.position.x= -33;
            l1.position.y= 0.2;
            l1.position.z= 17.5;
            
            l1.rotation.x= 1.57;
            l1.rotation.y= 0;
            l1.rotation.z= 1.57;
    
    var geometry = new THREE.PlaneBufferGeometry( 0.5, 3, 32 );
var material = new THREE.MeshBasicMaterial( {color: 0xFFD700, side: THREE.DoubleSide} );
var l1 = new THREE.Mesh( geometry, material );
scene.add( l1 );
            
             l1.position.x= -29;
            l1.position.y= 0.2;
            l1.position.z= 17.5;
            
            l1.rotation.x= 1.57;
            l1.rotation.y= 0;
            l1.rotation.z= 1.57;
    
        
    var geometry = new THREE.PlaneBufferGeometry( 0.5, 3, 32 );
var material = new THREE.MeshBasicMaterial( {color: 0xFFD700, side: THREE.DoubleSide} );
var l1 = new THREE.Mesh( geometry, material );
scene.add( l1 );
            
             l1.position.x= -25;
            l1.position.y= 0.2;
            l1.position.z= 17.5;
            
            l1.rotation.x= 1.57;
            l1.rotation.y= 0;
            l1.rotation.z= 1.57;
    
            
    var geometry = new THREE.PlaneBufferGeometry( 0.5, 3, 32 );
var material = new THREE.MeshBasicMaterial( {color: 0xFFD700, side: THREE.DoubleSide} );
var l1 = new THREE.Mesh( geometry, material );
scene.add( l1 );
            
             l1.position.x= -21;
            l1.position.y= 0.2;
            l1.position.z= 17.5;
            
            l1.rotation.x= 1.57;
            l1.rotation.y= 0;
            l1.rotation.z= 1.57;
    
           
    var geometry = new THREE.PlaneBufferGeometry( 0.5, 3, 32 );
var material = new THREE.MeshBasicMaterial( {color: 0xFFD700, side: THREE.DoubleSide} );
var l1 = new THREE.Mesh( geometry, material );
scene.add( l1 );
            
             l1.position.x= -17;
            l1.position.y= 0.2;
            l1.position.z= 17.5;
            
            l1.rotation.x= 1.57;
            l1.rotation.y= 0;
            l1.rotation.z= 1.57;
    
       var geometry = new THREE.PlaneBufferGeometry( 0.5, 3, 32 );
var material = new THREE.MeshBasicMaterial( {color: 0xFFD700, side: THREE.DoubleSide} );
var l1 = new THREE.Mesh( geometry, material );
scene.add( l1 );
            
             l1.position.x= -13;
            l1.position.y= 0.2;
            l1.position.z= 17.5;
            
            l1.rotation.x= 1.57;
            l1.rotation.y= 0;
            l1.rotation.z= 1.57;
    
       var geometry = new THREE.PlaneBufferGeometry( 0.5, 3, 32 );
var material = new THREE.MeshBasicMaterial( {color: 0xFFD700, side: THREE.DoubleSide} );
var l1 = new THREE.Mesh( geometry, material );
scene.add( l1 );
            
             l1.position.x= -9;
            l1.position.y= 0.2;
            l1.position.z= 17.5;
            
            l1.rotation.x= 1.57;
            l1.rotation.y= 0;
            l1.rotation.z= 1.57;
    
     var geometry = new THREE.PlaneBufferGeometry( 0.5, 3, 32 );
var material = new THREE.MeshBasicMaterial( {color: 0xFFD700, side: THREE.DoubleSide} );
var l1 = new THREE.Mesh( geometry, material );
scene.add( l1 );
            
             l1.position.x= -5;
            l1.position.y= 0.2;
            l1.position.z= 17.5;
            
            l1.rotation.x= 1.57;
            l1.rotation.y= 0;
            l1.rotation.z= 1.57;
    
    
  var geometry = new THREE.PlaneBufferGeometry( 0.5, 3, 32 );
var material = new THREE.MeshBasicMaterial( {color: 0xFFD700, side: THREE.DoubleSide} );
var l1 = new THREE.Mesh( geometry, material );
scene.add( l1 );
            
             l1.position.x= 33;
            l1.position.y= 0.2;
            l1.position.z= 7.5;
            
            l1.rotation.x= 1.57;
            l1.rotation.y= 0;
            l1.rotation.z= 1.57;
    
      var geometry = new THREE.PlaneBufferGeometry( 0.5, 3, 32 );
var material = new THREE.MeshBasicMaterial( {color: 0xFFD700, side: THREE.DoubleSide} );
var l1 = new THREE.Mesh( geometry, material );
scene.add( l1 );
            
             l1.position.x= 29;
            l1.position.y= 0.2;
            l1.position.z= 7.5;
            
            l1.rotation.x= 1.57;
            l1.rotation.y= 0;
            l1.rotation.z= 1.57;
    
     
      var geometry = new THREE.PlaneBufferGeometry( 0.5, 3, 32 );
var material = new THREE.MeshBasicMaterial( {color: 0xFFD700, side: THREE.DoubleSide} );
var l1 = new THREE.Mesh( geometry, material );
scene.add( l1 );
            
             l1.position.x= 25;
            l1.position.y= 0.2;
            l1.position.z= 7.5;
            
            l1.rotation.x= 1.57;
            l1.rotation.y= 0;
            l1.rotation.z= 1.57;
    
     
      var geometry = new THREE.PlaneBufferGeometry( 0.5, 3, 32 );
var material = new THREE.MeshBasicMaterial( {color: 0xFFD700, side: THREE.DoubleSide} );
var l1 = new THREE.Mesh( geometry, material );
scene.add( l1 );
            
             l1.position.x= 21;
            l1.position.y= 0.2;
            l1.position.z= 7.5;
            
            l1.rotation.x= 1.57;
            l1.rotation.y= 0;
            l1.rotation.z= 1.57;
    
         var geometry = new THREE.PlaneBufferGeometry( 0.5, 3, 32 );
var material = new THREE.MeshBasicMaterial( {color: 0xFFD700, side: THREE.DoubleSide} );
var l1 = new THREE.Mesh( geometry, material );
scene.add( l1 );
            
             l1.position.x= 17;
            l1.position.y= 0.2;
            l1.position.z= 7.5;
            
            l1.rotation.x= 1.57;
            l1.rotation.y= 0;
            l1.rotation.z= 1.57;
    
       var geometry = new THREE.PlaneBufferGeometry( 0.5, 3, 32 );
var material = new THREE.MeshBasicMaterial( {color: 0xFFD700, side: THREE.DoubleSide} );
var l1 = new THREE.Mesh( geometry, material );
scene.add( l1 );
            
             l1.position.x= 13;
            l1.position.y= 0.2;
            l1.position.z= 7.5;
            
            l1.rotation.x= 1.57;
            l1.rotation.y= 0;
            l1.rotation.z= 1.57;
    
     var geometry = new THREE.PlaneBufferGeometry( 0.5, 3, 32 );
var material = new THREE.MeshBasicMaterial( {color: 0xFFD700, side: THREE.DoubleSide} );
var l1 = new THREE.Mesh( geometry, material );
scene.add( l1 );
            
             l1.position.x= 9;
            l1.position.y= 0.2;
            l1.position.z= 7.5;
            
            l1.rotation.x= 1.57;
            l1.rotation.y= 0;
            l1.rotation.z= 1.57;
			 
			 //////////
			 
    
    
//CASAS

//EDIFICIOS
    //edificio1
    
    var geometry = new THREE.BoxBufferGeometry( 20, 10, 10 );
var material = new THREE.MeshBasicMaterial( {color: 0xffffff,map: ladrillo} );
var edi = new THREE.Mesh( geometry, material );
scene.add( edi );
    
    edi.position.x=-20;
       edi.position.y=5;
    edi.position.z=28;
    
    //edificio2
    
       var geometry = new THREE.BoxBufferGeometry( 10, 10, 3 );
var material = new THREE.MeshBasicMaterial( {color: 0xffffff,map: ladrillo} );
var edi2 = new THREE.Mesh( geometry, material );
scene.add( edi2 );
    
    edi2.position.x=-27;
       edi2.position.y=5;
    edi2.position.z=-12.5;

	  var geometry = new THREE.BoxGeometry( 10, 10, 5);
            var geometrya = new THREE.BoxGeometry( 10, 10, 5 );
            var geometry2 = new THREE.BoxGeometry( 4, 4, 4 );
            var geometry3 = new THREE.BoxGeometry( 15, 10, 6 );
            var geometry4 = new THREE.BoxGeometry( 4, 7, 4 );
            var geometry5 = new THREE.BoxGeometry( 30, 10, 6 );
            var geometry7 = new THREE.BoxGeometry( 6, 6, 10 );
            
     var material = new THREE.MeshStandardMaterial( {color: 0x00ffff,normalMap:glass} );
  var material = new THREE.MeshStandardMaterial( {color: 0xffffff,normalMap:prohibido} );
      var material = new THREE.MeshStandardMaterial( {color: 0xffffff,normalMap:left} );
      var material = new THREE.MeshStandardMaterial( {color: 0xffffff,normalMap:right} );
            var materialx = new THREE.MeshPhongMaterial( {color: 0xffffff,map:ladrillo3}	);
            var material2 = new THREE.MeshStandardMaterial( {color: 0xffffff,map:paredgrafiti} );
            var material3 = new THREE.MeshStandardMaterial( {color: 0xFF0000} );
            var material4 = new THREE.MeshStandardMaterial( {color: 0xF0E68C} );
            
            var Casa1 = new THREE.Mesh( geometry, materialx );
            var Casa1a = new THREE.Mesh( geometrya, materialx );
            var Casa2 = new THREE.Mesh( geometry, material2 );
            var Casa2a = new THREE.Mesh( geometry, material2 );
            var Casa3 = new THREE.Mesh( geometry3, material2 );
            var Casa4 = new THREE.Mesh( geometry5, materialx );
           
   
           
            Casa1.position.x=-20;
			Casa1.position.y=4.5;
			Casa1.position.z=4.5;
			Casa1.rotation.y=1.57;
            Casa1a.rotation.y=3.15;
			Casa1a.position.x=-12.5;
			Casa1a.position.y=4.5;
            Casa1a.position.z=7;
		
     
			Casa2.rotation.y=1.57;
			Casa2.position.x=21.5;
			Casa2.position.y=4.5;
			Casa2.position.z=-4.1;
            Casa2a.rotation.y=3.15;
			Casa2a.position.x=15;
			Casa2a.position.y=4.5;
	        Casa2a.position.z=-9.4;
			
			Casa3.rotation.y=3.15;
			Casa3.position.x=20;
			Casa3.position.y=4.5;
			Casa3.position.z=20;
			
			
			Casa4.position.y=4.5;
			Casa4.position.z=-30;
			
			scene.add(Casa1);
			scene.add(Casa1a);
			scene.add(Casa2);
			scene.add(Casa2a);
			scene.add(Casa3);
			scene.add(Casa4);
    
       
          
           /* var Casa1CSG = THREE.CSG.fromMesh(Casa1);
            var Casa1aCSG = THREE.CSG.fromMesh(Casa1a);
            var Casa2CSG = THREE.CSG.fromMesh(Casa2);
            var Casa2aCSG = THREE.CSG.fromMesh(Casa2a);
            var Casa3CSG = THREE.CSG.fromMesh(Casa3);
            var Casa4CSG = THREE.CSG.fromMesh(Casa4);*/

            
             //hacer Operaciones CSG

            /*var result2 = Casa1CSG.union(Casa1aCSG);
            var result3 = Casa2CSG.union(Casa2aCSG);
            var result4 =  Casa3CSG;
            var result5 =  Casa4CSG;*/
            
            
            //compilar

           /* var CasaA = THREE.CSG.toMesh(result2);
            var CasaB = THREE.CSG.toMesh(result3);
            var CasaC = THREE.CSG.toMesh(result4);
            var CasaD = THREE.CSG.toMesh(result5);*/
            
            /*CasaA.material=material;
            CasaB.material=material2;
            CasaC.material=material3;
            CasaD.material=material4;
            
            CasaA.position.x=-20;
            CasaA.position.y=4.5;
            CasaA.position.z=4.5;
            
            CasaB.position.x=15;
            CasaB.position.y=4.5;
            CasaB.position.z=-4.5;
            
            CasaC.rotation.y=3.15;
            CasaC.position.x=20;
            CasaC.position.y=4.5;
			CasaC.position.z=20;

            CasaD.position.y=4.5;
            CasaD.position.z=-30; */

            //scene.add(CasaA);
            //scene.add(CasaB);
            //scene.add(CasaC);
            //scene.add(CasaD);
            
	/// LIGHTS
	ambientLight = new THREE.AmbientLight(0xACB7F4, .5);
	scene.add(ambientLight);
	
	var directionalLight = new THREE.DirectionalLight( 0xDCF7E7, 1 );
scene.add( directionalLight );
//directionalLight.position.y=(200);
	
	
	    
    
	
	light = new THREE.PointLight(0xffffff, 0.01, 0.1);
	light.position.set(-3,10,-3);
	light.castShadow = true;
	// Will not light anything closer than 0.1 units or further than 25 units
	light.shadow.camera.near = 0.1;
	light.shadow.camera.far = 25;
	scene.add(light); 
	
	

	camera.position.x=30;
	camera.position.y=player.height;
	camera.position.z=30;
	camera.lookAt(new THREE.Vector3(-400,player.height,200));
	
	
	
	// Enable Shadows in the Renderer
	renderer.shadowMap.enabled = true;
	renderer.shadowMap.type = THREE.BasicShadowMap;
	
	document.body.appendChild(renderer.domElement);
	
	animate();
}

  


function animate(){
	requestAnimationFrame(animate);
	
	
	if(keyboard[87]){ // W key
		camera.position.x -= Math.sin(camera.rotation.y) * player.speed;
		camera.position.z -= -Math.cos(camera.rotation.y) * player.speed;
	}
	if(keyboard[83]){ // S key
		camera.position.x += Math.sin(camera.rotation.y) * player.speed;
		camera.position.z += -Math.cos(camera.rotation.y) * player.speed;
	}
	if(keyboard[65]){ // A key
		camera.position.x += Math.sin(camera.rotation.y + Math.PI) * player.speed;
		camera.position.z += -Math.cos(camera.rotation.y + Math.PI) * player.speed;
	}
	if(keyboard[68]){ // D key
		camera.position.x += Math.sin(camera.rotation.y - Math.PI) * player.speed;
		camera.position.z += -Math.cos(camera.rotation.y - Math.PI) * player.speed;
	}
	
	if(keyboard[37]){ // left arrow key
		camera.rotation.y -= player.turnSpeed;
	}
	if(keyboard[39]){ // right arrow key
		camera.rotation.y += player.turnSpeed;
	}
	
	renderer.render(scene, camera);
}

function keyDown(event){
	keyboard[event.keyCode] = true;
}

function keyUp(event){
	keyboard[event.keyCode] = false;
}

window.addEventListener('keydown', keyDown);
window.addEventListener('keyup', keyUp);

window.onload = init;
