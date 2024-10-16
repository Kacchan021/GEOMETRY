import * as THREE from 'three';

// Create the scene and camera
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

// Create the renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Create geometries with different colors
const geometries = [
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.ConeGeometry(0.5, 1, 32),
  new THREE.CylinderGeometry(0.5, 0.5, 1, 32),
  new THREE.SphereGeometry(0.5, 32, 32),
  new THREE.TorusGeometry(0.5, 0.2, 16, 100)
];

const materials = [
  new THREE.MeshBasicMaterial({ color: 0xff0000 }), // Red
  new THREE.MeshBasicMaterial({ color: 0x00ff00 }), // Green
  new THREE.MeshBasicMaterial({ color: 0x0000ff }), // Blue
  new THREE.MeshBasicMaterial({ color: 0xffff00 }), // Yellow
  new THREE.MeshBasicMaterial({ color: 0xff00ff })  // Magenta
];

// Create meshes and set their positions
const meshes = geometries.map((geometry, index) => {
  const mesh = new THREE.Mesh(geometry, materials[index]);
  mesh.position.x = (index - 2) * 2; // Spread out along the X axis
  return mesh;
});

// Add all meshes to the scene
meshes.forEach(mesh => scene.add(mesh));

// Position the camera
camera.position.z = 5;

// Animation loop
function animate() {
  requestAnimationFrame(animate);

  // Add some simple animations (rotation)
  meshes.forEach(mesh => {
    mesh.rotation.x += 0.01;
    mesh.rotation.y += 0.01;
  });

  renderer.render(scene, camera);
}

animate();
