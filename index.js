// Inisialisasi scene, camera, dan renderer
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

// Menambahkan dinding
var wallGeometry = new THREE.BoxGeometry( 10, 10, 0.1 );
var wallMaterial = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
var wall1 = new THREE.Mesh( wallGeometry, wallMaterial );
wall1.position.set( 0, 5, -5 );
var wall2 = new THREE.Mesh( wallGeometry, wallMaterial );
wall2.position.set( 0, 5, 5 );
var wall3 = new THREE.Mesh( wallGeometry, wallMaterial );
wall3.position.set( 5, 5, 0 );
var wall4 = new THREE.Mesh( wallGeometry, wallMaterial );
wall4.position.set( -5, 5, 0 );
var floorGeometry = new THREE.BoxGeometry( 10, 0.1, 10 );
var floorMaterial = new THREE.MeshBasicMaterial( { color: 0x00ffff } );
var floor = new THREE.Mesh( floorGeometry, floorMaterial );
floor.position.set( 0, -5, 0 );
scene.add( wall1, wall2, wall3, wall4, floor );

// Menambahkan lampu
var light = new THREE.PointLight( 0xffffff, 1, 100 );
light.position.set( 0, 3, 0 );
scene.add( light );

// Mengatur posisi kamera
camera.position.z = 10;

// Loop render
function animate() {
    requestAnimationFrame( animate );
    renderer.render( scene, camera );
}
animate();
