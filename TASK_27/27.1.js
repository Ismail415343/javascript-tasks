async function expAlbum(){
try{
    const albumRes = await fetch('https://jsonplaceholder.typicode.com/albums')
    const photoRes = await fetch('https://jsonplaceholder.typicode.com/photos')

    const albums = await albumRes.json()
    const photos = await photoRes.json()


    const albumWithPhotos = []
    for(let i = 0; i<albums.length; i++){
        const album = albums[i];
        const relatedPhotos = [];
    for(let j =0; j<photos.length;j++){
        if(photos[j].albumId===album.id){
            relatedPhotos[relatedPhotos.length]= photos[j];
        }
    }
    
    albumWithPhotos[albumWithPhotos.length]={
        id:album.id,
        title:album.title,
        photos:relatedPhotos
    }
    
    }
for(let i=0; i<albumWithPhotos.length; i++){
    const album = albumWithPhotos[i];
    console.log("album", album.title + "-->" + album.photos.length+ "photos")
}

let maxAlbum = albumWithPhotos[0];
for(let i=1; i<albumWithPhotos.length;i++){
    if(albumWithPhotos[i].photos.length> maxAlbum.photos.length){
    maxAlbum = albumWithPhotos[i]


    }
}

console.log("album with most photos"+ maxAlbum.title + "photos " + maxAlbum.photos.length)

} catch(err){
console.log("error"+ err)
}
}
expAlbum()