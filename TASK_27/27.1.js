async function expAlbum(){
try{
    const albumRes = await fetch('https://jsonplaceholder.typicode.com/albums')
    const photoRes = await fetch('https://jsonplaceholder.typicode.com/photos')

    const albums = await albumRes.json()
    const photos = await photoRes.json()


    if(!albums.length || !photos.length){
    console.log('no dat aavailable')
    return;
}

const photoMap = {};
for(const photo of photos){
    if(!photoMap[photo.albumId] ){
        photoMap[photo.albumId]=[];
    }
    photoMap[photo.albumId].push(photo)

}


    const albumWithPhotos = []
    for(let i = 0; i<albums.length; i++){
        const album = albums[i];
    const relatedPhotos = photoMap[album.id]||[];
    albumWithPhotos.push({ id: album.id, title: album.title, photos: relatedPhotos });

    }


    for(let i =0; i<albumWithPhotos.length;i++){
        const album = albumWithPhotos[i];
        console.log(`album : ${album.title} --> ${album.photos.length} photos`)
}



let maxAlbum = albumWithPhotos[0];
for(let i=1; i<albumWithPhotos.length;i++){
    if(albumWithPhotos[i].photos.length> maxAlbum.photos.length){
    maxAlbum = albumWithPhotos[i]


    }
}
console.log(`\n album with max photos : ${maxAlbum.title} (${maxAlbum.photos.length})`);

} catch(err){
console.log("error"+ err)
}
}
expAlbum()



// Space Complexity: O(n + m)
// We store all albums, all photos, and the photoMap in memory.
// Memory grows directly with the number of albums and photos.