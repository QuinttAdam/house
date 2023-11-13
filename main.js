import './style.css'


import * as THREE from 'three';
//import orbit controls
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
//import texture loader
import { TextureLoader } from 'three/src/loaders/TextureLoader.js';
//import gsap
import gsap from 'gsap';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );
//add orbit controls
const controls = new OrbitControls( camera, renderer.domElement );
//add axis helper
const axesHelper = new THREE.AxesHelper( 5 );
scene.add( axesHelper );

//load texture /textures/fortnite.png
const textureLoader = new TextureLoader();
const texture = textureLoader.load('/textures/fortnite.jpg');

//add new group
const group = new THREE.Group();
scene.add( group );

//add wall
const wallGeometry = new THREE.BoxGeometry( 8, 4, 0.1 );
const boxMaterial = new THREE.MeshBasicMaterial( {color: 0xABABAB, side: THREE.DoubleSide} );
const wall = new THREE.Mesh( wallGeometry, boxMaterial );
wall.position.z = -4;
wall.position.y = 0;
wall.position.x = 0;
group.add( wall );

//add wall
const wallGeometry2 = new THREE.BoxGeometry( 8, 2, 0.1 );
const wall2 = new THREE.Mesh( wallGeometry2, boxMaterial );
wall2.position.z = 2;
wall2.position.y = 1;
wall2.position.x = 0;
group.add( wall2 );

//add wall
const wallGeometry3 = new THREE.BoxGeometry( 0.1, 4, 6 );
const wall3 = new THREE.Mesh( wallGeometry3, boxMaterial );
wall3.position.z = -1;
wall3.position.y = 0;
wall3.position.x = -4;
group.add( wall3 );

//add wall
const wallGeometry4 = new THREE.BoxGeometry( 0.1, 4, 6 );
const wall4 = new THREE.Mesh( wallGeometry4, boxMaterial );
wall4.position.z = -1;
wall4.position.y = 0;
wall4.position.x = 4;
group.add( wall4 );

//add wall
const wallGeometry5 = new THREE.BoxGeometry( 3, 2, 0.1 );
const wall5 = new THREE.Mesh( wallGeometry5, boxMaterial );
wall5.position.z = 2;
wall5.position.y = -1;
wall5.position.x = -2.5;
group.add( wall5 );

//add wall
const wallGeometry6 = new THREE.BoxGeometry( 3, 2, 0.1 );
const wall6 = new THREE.Mesh( wallGeometry6, boxMaterial );
wall6.position.z = 2;
wall6.position.y = -1;
wall6.position.x = 2.5;
group.add( wall6 );

//add roof
const roofGeometry = new THREE.BoxGeometry( 8, 0.1, 6 );
const roof = new THREE.Mesh( roofGeometry, boxMaterial );
roof.position.z = -1;
roof.position.y = 2;
roof.position.x = 0;
group.add( roof );

//add cone on roof
const coneGeometry = new THREE.ConeGeometry( 3, 4, 32 );
const coneMaterial = new THREE.MeshBasicMaterial( {color: 0xffffff} );
const cone = new THREE.Mesh( coneGeometry, coneMaterial );
cone.position.z = -1;
cone.position.y = 4;
cone.position.x = 0;
group.add( cone );

//load texture /textures/fortnite.png
const geometry = new THREE.BoxGeometry( 1, 1, 0.05 );
const material = new THREE.MeshBasicMaterial( { map: texture } );
const cube = new THREE.Mesh( geometry, material );
cube.position.z = -3.95;
cube.position.x = 0;
group.add( cube );

// add door
const doorGeometry = new THREE.BoxGeometry(1, 2, 0.1);
const doorMaterial = new THREE.MeshBasicMaterial({ color: 0x585858, side: THREE.DoubleSide });
const door = new THREE.Mesh(doorGeometry, doorMaterial);
door.position.z = 1.95;
door.position.y = -1;
door.position.x = -0.5;
group.add(door);

// add door
const doorGeometry2 = new THREE.BoxGeometry(1, 2, 0.1);
const door2 = new THREE.Mesh(doorGeometry2, doorMaterial);
door2.position.z = 1.95;
door2.position.y = -1;
door2.position.x = 0.5;
group.add(door2);

//add clock
const clock = new THREE.Clock();

function animate() {
  const elapsedTime = clock.getElapsedTime();
  const speed = elapsedTime * 1.5;

  // GSAP animation for door rotation and position
  gsap.to(door.rotation, { duration: 1, y: Math.PI * -0.5});
  gsap.to(door.position, { duration: 1, x: -1, z: 2.5});

  gsap.to(door2.rotation, { duration: 1, y:Math.PI * 0.5});
  gsap.to(door2.position, { duration: 1, x: 1, z: 2.5});

  requestAnimationFrame(animate);

  renderer.render(scene, camera);
}

animate();



camera.position.z = 10;


//add green plane
const planeGeometry = new THREE.PlaneGeometry( 10, 10, 100 );
const planeMaterial = new THREE.MeshBasicMaterial( {color: 0x00ff00, side: THREE.DoubleSide} );
const plane = new THREE.Mesh( planeGeometry, planeMaterial );
plane.position.z = 0;
plane.position.y = -2;
plane.rotation.x = Math.PI*0.5;
group.add( plane );



renderer.render( scene, camera );
