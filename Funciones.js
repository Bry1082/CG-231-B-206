//Transformaciones  de cono

function Traslation(Tx,Ty,Tz) { //Transformacion de translacion 
    var matriz = new THREE.Matrix4();
    matriz.set(1, 0, 0, Tx,
            0, 1, 0, Ty,
            0, 0, 1, Tz,
            0, 0, 0, 1);
    return matriz;
}
function Escalado(Sx,Sy,Sz) {
    var matrizS = new THREE.Matrix4();
    matrizS.set(Sx, 0, 0, 0,
            0, Sy, 0, 0,
            0, 0, Sz, 0,
            0, 0, 0, 1);
    return matrizS;
}


function Rotacion(angle) {

    var matrizRx = new THREE.Matrix4();
    var Rx = (angle[0]*Math.PI)/180;
    var cx = Math.cos(Rx);
    var sx = Math.sin(Rx);

    matrizRx.set(1,  0, 0, 0, //rotacion en x 
                0,  cx, -sx, 0, 
                0, sx, cx, 0,
                0, 0, 0, 1);


    var matrizRy = new THREE.Matrix4();
    var Ry = (angle[1]*Math.PI)/180;
    var cy = Math.cos(Ry);
    var sy = Math.sin(Ry);

    matrizRy.set(cy,  0, sy, 0, //rotacion en y
                0,  1, 0, 0, 
                -sy, 0, cy, 0,
                0, 0, 0, 1);

    var matrizRz = new THREE.Matrix4();
    var Rz = (angle[2]*Math.PI)/180;
    var cz = Math.cos(Rz);
    var sz = Math.sin(Rz);

    matrizRz.set(cz,  -sz, 0, 0, //rotacion en z
                sz,  cz, 0, 0, 
                0, 0, 1, 0,
                0, 0, 0, 1);
    
    
    matrixResultado = new THREE.Matrix4();

    matrixResultado.set(1,  0, 0, 0, //Matriz identidad para que se palique la rotacion en todos los angulos dados
                        0,  1, 0, 0, 
                        0, 0, 1, 0,
                        0, 0, 0, 1);

    matrixResultado.multiply(matrizRx);
    matrixResultado.multiply(matrizRy);
    matrixResultado.multiply(matrizRz);


        return  matrixResultado
        

}
/**
 * Rotacion real:rotacion en los 3 ejes y traslado 
 * ENTRADA: OBJETO: Objeto tipo THREE.line a ser rotado, angulitos = vector angulos en x,y,z,vp=(posicion inicial)
 * SALIDA: obj Actializado 
 */
function RotacionReal(obj,vp,angle){
    vt= [-vp[0],-vp[1],-vp[2]]; //Translacion al puto de origen [0,0,0]
    obj.applyMatrix(Traslation(vt)); 
    obj.applyMatrix(Rotacion(angle));//Rotacion del obj
    obj.applyMatrix(Traslation(vp));// Traslacion al punto inicial 

}

/**
 * PiramideFinal:rotacion en los 3 ejes y escalado en el punto de origen
 * ENTRADA: OBJETO: Objeto tipo THREE.line a ser rotado, angle = vector angulos en x,y,z, vp=( vector de posicion inicial)
 * SALIDA: obj : Actializado escalado y rotado.
 */

function Eferafinal(obj,vp,Rx,Ry,Rz,Sx,Sy,Sz,Tx,Ty,Tz){
    vt= [-vp[0],-vp[1],-vp[2]]; //Translacion al puto de origen [0,0,0]
    obj.applyMatrix(Traslation(vt)); //Traslacion origen
    obj.applyMatrix(Escalado(Sx,Sy,Sz));//Escalacion del obj
    obj.applyMatrix(Rotacion(Rx,Ry,Rz));//Roatcion del obj
    //obj.applyMatrix(Traslation(Tx,Ty,Tz));// Traslacion al punto inicial 
    obj.add();

}


/**
 * Escalado real: escala y traslada
 * ENTRADA: OBJETO: Objeto tipo THREE.line a ser escaldado, vs=(Vectores escalado),vp=(posicion inicial)
 * SALIDA: obj Actializado 
 */
 //Funciones de Three,js
function EscaladoReal(obj,Sx,Sy,Sz){
   obj.scale(Sx,Sy,Sz);

}
function RotacionReal(obj,Rx,Ry,Rz){
    obj.rotateX(Rx);
    obj.rotateY(Ry);
    obj.rotateZ(Rz);
 
 }
 function TranslacionReal(obj,Tx,Ty,Tz){
    obj.stranslate(Tx,Ty,Tz);
 
 }