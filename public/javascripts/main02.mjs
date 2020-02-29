import { fragmentShader } from "/colorShader/fragmentShader.mjs";
import { vertexShader } from "/colorShader/vertexShader.mjs";
import { initShaderProgram } from "/shaders/methods.mjs";
import { initBuffers } from "/colorShader/init.mjs";
import { drawScene } from "/scenes/scene02.mjs";
import { loadTexture } from "/colorShader/loadTexture.mjs";
function main() {
  const canvas = document.querySelector("#gl");
  const gl = canvas.getContext("webgl");
  canvas.width  = window.innerWidth;
  canvas.height = window.innerHeight;
  try {
    if (!gl) {
      throw "No se pudo inicializar WebGL";
    }

    const shaderProgram = initShaderProgram(gl, vertexShader, fragmentShader);

    const programInfo = {
      program: shaderProgram,
    attribLocations: {
      vertexPosition: gl.getAttribLocation(shaderProgram, 'aVertexPosition'),
      textureCoord: gl.getAttribLocation(shaderProgram, 'aTextureCoord'),
    },
    uniformLocations: {
      projectionMatrix: gl.getUniformLocation(shaderProgram, 'uProjectionMatrix'),
      modelViewMatrix: gl.getUniformLocation(shaderProgram, 'uModelViewMatrix'),
      uSampler: gl.getUniformLocation(shaderProgram, 'uSampler'),
    },
    };

    const buffers = initBuffers(gl);
    // Load texture

    const texture = loadTexture(gl, '/images/vadim-sadovski-r5.jpg');
    var then = 0;

    // Draw the scene repeatedly
    function render(now) {
      now *= 0.001; // convert to seconds
      const deltaTime = now - then;
      then = now;

      drawScene(gl, programInfo, buffers, texture, deltaTime);

      requestAnimationFrame(render);
    }

//
// Initialize a texture and load an image.
// When the image finished loading copy it into the texture.
//


function isPowerOf2(value) {
  return (value & (value - 1)) == 0;
}

    requestAnimationFrame(render);
  } catch (error) {
    console.error(error);
  }
}
window.onload = main;
