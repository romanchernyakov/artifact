import * as ThreeMeshUI from "three-mesh-ui";

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

scene.background = new THREE.Color(0xececec)

const geometry = new THREE.PlaneGeometry( 0.5, 1);
const material = new THREE.MeshBasicMaterial( { color: 0x000000 } );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

camera.position.z = 5;

makeTextPanel();

//

renderer.setAnimationLoop(loop);

//

function makeTextPanel() {
  console.log(ThreeMeshUI.Block.toString());

  const container = new ThreeMeshUI.Block({
    width: 2,
    height: 0.5,
    padding: 0.05,
    justifyContent: "center",
    textAlign: "center",
    fontFamily: "/assets/Roboto-msdf.json",
    fontTexture: "/assets/Roboto-msdf.png"
  });

  container.position.set(0, 1, -1.8);
  container.rotation.x = -0.55;
  scene.add(container);

  //

  container.add(
    new ThreeMeshUI.Text({
      content: "three-mesh-ui npm package",
      fontSize: 0.125
    })
  );
}

function animate() {
	requestAnimationFrame( animate );
    cube.rotation.y = 0.9;
	renderer.render( scene, camera );
}
animate();