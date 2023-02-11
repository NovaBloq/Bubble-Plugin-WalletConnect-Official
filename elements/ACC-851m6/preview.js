function(instance, properties) {

    const bgImage = "https://dd7tel2830j4w.cloudfront.net/f1670616483921x789536864753472600/wc_2.0_100x100.webp";

    instance.canvas.css({
        "width": `${properties.bubble.width()}px`,
        "height": `${properties.bubble.height()}px`,
        "background-image": `url(${bgImage})`,
        "background-repeat": 'no-repeat, repeat',
        "background-position": 'center',
        "background-size": 'contain'
    })



}