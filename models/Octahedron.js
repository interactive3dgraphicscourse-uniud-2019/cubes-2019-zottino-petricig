/*
* TODO doc
*/

var boxGeometry = new THREE.BoxBufferGeometry(1,1,1);

class Octahedron extends THREE.Group {

    MiddlePont(a, b){
        return new THREE.Vector3((a.x + b.x) / 2, (a.y + b.y) / 2, (a.z + b.z) / 2 );
    }


    ScaleVector(a){
        var scale = 1/Math.sqrt(a.x * a.x + a.y * a.y + a.z * a.z);
        a.x *= scale;
        a.y *= scale;
        a.z *= scale;
        return a;
    }


    SplitTriangles(){
        var new_faces = []; 
        for (var i = 0; i < this.faces.length; i++) {
            var face = this.faces[i];
            var ab = this.MiddlePont(this.vertices[face.a], this.vertices[face.b]);
            var bc = this.MiddlePont(this.vertices[face.b], this.vertices[face.c]);
            var ca = this.MiddlePont(this.vertices[face.c], this.vertices[face.a]);
            var vertex_count = this.vertices.length;

            ca = this.ScaleVector(ca)
            bc = this.ScaleVector(bc)
            ab = this.ScaleVector(ab)

            this.vertices.push( ab, bc, ca );
            new_faces.push(new THREE.Face3(face.a, vertex_count + 0, vertex_count + 2)) // a ab ac
            new_faces.push(new THREE.Face3(vertex_count + 0, face.b, vertex_count + 1)) // ab b bc
            new_faces.push(new THREE.Face3(vertex_count + 1, face.c, vertex_count + 2)) // bc c ac
            new_faces.push(new THREE.Face3(vertex_count + 0, vertex_count + 1, vertex_count + 2)) // ab bc ac
        }
        for(var i = 0; i < new_faces.length; i++){
            this.faces.push(new_faces[i]);
        }
        this.ApplyChanges();
    }


    ApplyChanges(){
        var new_geometry = new THREE.Geometry(); 
        for(var i = 0; i < this.vertices.length; i++){
            new_geometry.vertices.push(this.vertices[i]);
        }
        for(var i = 0; i < this.faces.length; i++){
            new_geometry.faces.push(this.faces[i]);
        }
        this.octa.geometry = new_geometry
    }


    constructor(){
        super()
        this.vertices = [ /*0*/ new THREE.Vector3( 0,1,0 ),  /* up    */
            /*1*/ new THREE.Vector3( 0,-1,0 ), /* down  */
            /*2*/ new THREE.Vector3( 1,0,0 ),  /* right */
            /*3*/ new THREE.Vector3( -1,0,0 ), /* left  */                
            /*4*/ new THREE.Vector3( 0,0,1 ),  /* back  */
            /*5*/ new THREE.Vector3( 0,0,-1 )  /* front */];

        this.faces = [new THREE.Face3(3,0,5),
                new THREE.Face3(0,2,5),
                new THREE.Face3(3,5,1),
                new THREE.Face3(5,2,1),
        
                new THREE.Face3(0,3,4),
                new THREE.Face3(2,0,4),
                new THREE.Face3(4,3,1),
                new THREE.Face3(2,4,1)];

        // Octahedron
        this.geometry = new THREE.Geometry(); 						
        var material = new THREE.MeshBasicMaterial( { 
            color:0xE50000, 
            opacity: 0.7, 
            transparent: true,
            side: THREE.FrontSide });
        this.octa = new THREE.Mesh(this.geometry, material);

        // Bulb
        var bulbGeometry = new THREE.SphereBufferGeometry( 0.02, 16, 8 );
        
        var bulbMat = new THREE.MeshStandardMaterial( {
            emissive: 0xffffee,
            emissiveIntensity: 1,
            color: 0xffffff
        } );
        
        this.bulbLight = new THREE.PointLight( 0xffee88, 1, 100, 2 );
        this.bulbLight.position.set( 0, 0 , 0 );
        this.bulbLight.castShadow = true;
        this.bulbLight.add( new THREE.Mesh( bulbGeometry, bulbMat ) );
        this.bulbLight.power = 10000;
        
        this.ApplyChanges()
        this.add( this.bulbLight );
        this.add( this.octa);
	}
}