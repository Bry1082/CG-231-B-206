var WIDTH = window.innerWidth;
var HEIGHT = window.innerHeight;

var renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(WIDTH, HEIGHT);
renderer.setClearColor(0xDDDDDD, 1);
document.body.appendChild(renderer.domElement);

var scene = new THREE.Scene();

var camera = new THREE.PerspectiveCamera(80, WIDTH / HEIGHT);
camera.position.z = 4.5;
camera.position.x = -1.2;
camera.position.y = 2;

camera.rotation.set(0, -0.5, 0);
scene.add(camera);

var controls = new THREE.OrbitControls(camera, renderer.domElement);

//Creacion de la esfera 
R=1; //radio de la esfera
const color= new THREE.Color("rgb(209, 213, 136)");

var geometry = new THREE.SphereGeometry(R, 20, 32 );
var material = new THREE.MeshMatcapMaterial( { color } );
var sphere = new THREE.Mesh( geometry, material );
scene.add( sphere );

//Parametrizacion de las Variables Globlales
Sx=0.5;
Sy=0.5;
Sz=3;
Rx=-Math.PI/2;
Ry=Math.PI/4;
Rz=-Math.PI/4;
Tx=0;
Ty=0;
Tz=(R*Sz);

//Transformaciones de la esfera

sphere.position.set(0,0,0); // Se posiciona en el centro
//1.Se escala para dar la primera forma (e)
EscaladoReal(geometry,Sx,Sy,Sz);
//2.Se rota en el origen para que quede en los mismo angulos de la rotacion de la figura (f)
console.log("Ry="+Ry);
Rotacionx(sphere,Rx);
Rotacionz(sphere,Rz);
Rotaciony(sphere,Ry);
//3.Se translada para  que una esquina quede en el centro
TranslacionReal(geometry,Tx,Ty,Tz);


//Luz
const light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(-1, 2, 4);
scene.add(light);

const size = 150;
const divisions = 160;
const axesHelper = new THREE.AxesHelper(1000);
scene.add(axesHelper);

const gridHelper = new THREE.GridHelper(size, divisions);
scene.add(gridHelper);

function render() {
  requestAnimationFrame(render);
  renderer.render(scene, camera);
}

render();