export const allProjects = [
    {
        id: 1,
        name: "Animeme",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer pulvinar purus augue, sed iaculis enim egestas et. Morbi tincidunt neque dictum justo congue, eu pretium magna fermentum. Pellentesque nec convallis odio, ac viverra magna. Fusce sed pulvinar enim. Etiam in urna dapibus, pulvinar est finibus, suscipit leo. Sed elementum elit velit, a aliquet lacus vulputate vitae. Maecenas id orci ullamcorper, feugiat nulla ac, dignissim quam. Nullam faucibus consequat ligula malesuada luctus. Quisque lobortis quis felis et laoreet. Curabitur euismod ac diam quis ullamcorper. Sed at orci enim. Mauris hendrerit leo vel placerat finibus. Fusce eleifend hendrerit facilisis. Nullam nec lorem non est fermentum rhoncus at ut enim.",
        previewType: "image",
        previewUrl: "https://www.mirf.ru/wp-content/uploads/2020/01/Deca-Dense.jpg",
        files: Array.from({length: 5}, () => {
            let type, url;
            if (Math.random() > 0.5) {
                type = "video";
                url = "https://archive.org/download/Popeye_forPresident/Popeye_forPresident_512kb.mp4";
            } else {
                type = "image";
                url = "https://www.mirf.ru/wp-content/uploads/2020/01/Deca-Dense.jpg";
            }
            return {type, url}
        })
    },
    {
        id: 2,
        name: "Togochi",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer pulvinar purus augue, sed iaculis enim egestas et. Morbi tincidunt neque dictum justo congue, eu pretium magna fermentum. Pellentesque nec convallis odio, ac viverra magna. Fusce sed pulvinar enim. Etiam in urna dapibus, pulvinar est finibus, suscipit leo. Sed elementum elit velit, a aliquet lacus vulputate vitae. Maecenas id orci ullamcorper, feugiat nulla ac, dignissim quam. Nullam faucibus consequat ligula malesuada luctus. Quisque lobortis quis felis et laoreet. Curabitur euismod ac diam quis ullamcorper. Sed at orci enim. Mauris hendrerit leo vel placerat finibus. Fusce eleifend hendrerit facilisis. Nullam nec lorem non est fermentum rhoncus at ut enim.",
        previewType: "image",
        previewUrl: "https://networkencyclopedia.com/wp-content/uploads/2019/09/web-application-architecture.png"
    },
    {
        id: 3,
        name: "Ninjacat",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer pulvinar purus augue, sed iaculis enim egestas et. Morbi tincidunt neque dictum justo congue, eu pretium magna fermentum. Pellentesque nec convallis odio, ac viverra magna. Fusce sed pulvinar enim. Etiam in urna dapibus, pulvinar est finibus, suscipit leo. Sed elementum elit velit, a aliquet lacus vulputate vitae. Maecenas id orci ullamcorper, feugiat nulla ac, dignissim quam. Nullam faucibus consequat ligula malesuada luctus. Quisque lobortis quis felis et laoreet. Curabitur euismod ac diam quis ullamcorper. Sed at orci enim. Mauris hendrerit leo vel placerat finibus. Fusce eleifend hendrerit facilisis. Nullam nec lorem non est fermentum rhoncus at ut enim.",
        previewType: "image",
        previewUrl: "https://cdn.geekwire.com/wp-content/uploads/2015/07/Windows_Insider_Ninjacat_Trex-1024x768-Desktop.png"
    },
    {
        id: 4,
        name: "FoodXY",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer pulvinar purus augue, sed iaculis enim egestas et. Morbi tincidunt neque dictum justo congue, eu pretium magna fermentum. Pellentesque nec convallis odio, ac viverra magna. Fusce sed pulvinar enim. Etiam in urna dapibus, pulvinar est finibus, suscipit leo. Sed elementum elit velit, a aliquet lacus vulputate vitae. Maecenas id orci ullamcorper, feugiat nulla ac, dignissim quam. Nullam faucibus consequat ligula malesuada luctus. Quisque lobortis quis felis et laoreet. Curabitur euismod ac diam quis ullamcorper. Sed at orci enim. Mauris hendrerit leo vel placerat finibus. Fusce eleifend hendrerit facilisis. Nullam nec lorem non est fermentum rhoncus at ut enim.",
        previewType: "image",
        previewUrl: "https://www.mirf.ru/wp-content/uploads/2020/01/Deca-Dense.jpg"
    },
    {
        id: 5,
        name: "Molva",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer pulvinar purus augue, sed iaculis enim egestas et. Morbi tincidunt neque dictum justo congue, eu pretium magna fermentum. Pellentesque nec convallis odio, ac viverra magna. Fusce sed pulvinar enim. Etiam in urna dapibus, pulvinar est finibus, suscipit leo. Sed elementum elit velit, a aliquet lacus vulputate vitae. Maecenas id orci ullamcorper, feugiat nulla ac, dignissim quam. Nullam faucibus consequat ligula malesuada luctus. Quisque lobortis quis felis et laoreet. Curabitur euismod ac diam quis ullamcorper. Sed at orci enim. Mauris hendrerit leo vel placerat finibus. Fusce eleifend hendrerit facilisis. Nullam nec lorem non est fermentum rhoncus at ut enim.",
        previewType: "image",
        previewUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Molva_molvaDessin.jpg/800px-Molva_molvaDessin.jpg"
    },
    {
        id: 6,
        name: "3D gun",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer pulvinar purus augue, sed iaculis enim egestas et. Morbi tincidunt neque dictum justo congue, eu pretium magna fermentum. Pellentesque nec convallis odio, ac viverra magna. Fusce sed pulvinar enim. Etiam in urna dapibus, pulvinar est finibus, suscipit leo. Sed elementum elit velit, a aliquet lacus vulputate vitae. Maecenas id orci ullamcorper, feugiat nulla ac, dignissim quam. Nullam faucibus consequat ligula malesuada luctus. Quisque lobortis quis felis et laoreet. Curabitur euismod ac diam quis ullamcorper. Sed at orci enim. Mauris hendrerit leo vel placerat finibus. Fusce eleifend hendrerit facilisis. Nullam nec lorem non est fermentum rhoncus at ut enim.",
        previewType: "image",
        previewUrl: "https://cdnb.artstation.com/p/assets/images/images/008/103/641/large/mohamed-hassen-foux-msbs-weapon-model-3d-model-low-poly-max-3ds.jpg?1510513492"
    },
    {
        id: 7,
        name: "3D monster",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer pulvinar purus augue, sed iaculis enim egestas et. Morbi tincidunt neque dictum justo congue, eu pretium magna fermentum. Pellentesque nec convallis odio, ac viverra magna. Fusce sed pulvinar enim. Etiam in urna dapibus, pulvinar est finibus, suscipit leo. Sed elementum elit velit, a aliquet lacus vulputate vitae. Maecenas id orci ullamcorper, feugiat nulla ac, dignissim quam. Nullam faucibus consequat ligula malesuada luctus. Quisque lobortis quis felis et laoreet. Curabitur euismod ac diam quis ullamcorper. Sed at orci enim. Mauris hendrerit leo vel placerat finibus. Fusce eleifend hendrerit facilisis. Nullam nec lorem non est fermentum rhoncus at ut enim.",
        previewType: "image",
        previewUrl: "https://webneel.com/daily/sites/default/files/images/daily/08-2013/24-3d-monster-character-jesse-sandifer.preview.jpg"
    },
    {
        id: 8,
        name: "Shrek",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer pulvinar purus augue, sed iaculis enim egestas et. Morbi tincidunt neque dictum justo congue, eu pretium magna fermentum. Pellentesque nec convallis odio, ac viverra magna. Fusce sed pulvinar enim. Etiam in urna dapibus, pulvinar est finibus, suscipit leo. Sed elementum elit velit, a aliquet lacus vulputate vitae. Maecenas id orci ullamcorper, feugiat nulla ac, dignissim quam. Nullam faucibus consequat ligula malesuada luctus. Quisque lobortis quis felis et laoreet. Curabitur euismod ac diam quis ullamcorper. Sed at orci enim. Mauris hendrerit leo vel placerat finibus. Fusce eleifend hendrerit facilisis. Nullam nec lorem non est fermentum rhoncus at ut enim.",
        previewType: "video",
        previewUrl: "https://archive.org/download/Popeye_forPresident/Popeye_forPresident_512kb.mp4"
    },
    {
        id: 9,
        name: "Shrek",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer pulvinar purus augue, sed iaculis enim egestas et. Morbi tincidunt neque dictum justo congue, eu pretium magna fermentum. Pellentesque nec convallis odio, ac viverra magna. Fusce sed pulvinar enim. Etiam in urna dapibus, pulvinar est finibus, suscipit leo. Sed elementum elit velit, a aliquet lacus vulputate vitae. Maecenas id orci ullamcorper, feugiat nulla ac, dignissim quam. Nullam faucibus consequat ligula malesuada luctus. Quisque lobortis quis felis et laoreet. Curabitur euismod ac diam quis ullamcorper. Sed at orci enim. Mauris hendrerit leo vel placerat finibus. Fusce eleifend hendrerit facilisis. Nullam nec lorem non est fermentum rhoncus at ut enim.",
        previewType: "video",
        previewUrl: "https://archive.org/download/Popeye_forPresident/Popeye_forPresident_512kb.mp4"
    },
    {
        id: 10,
        name: "Shrek",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer pulvinar purus augue, sed iaculis enim egestas et. Morbi tincidunt neque dictum justo congue, eu pretium magna fermentum. Pellentesque nec convallis odio, ac viverra magna. Fusce sed pulvinar enim. Etiam in urna dapibus, pulvinar est finibus, suscipit leo. Sed elementum elit velit, a aliquet lacus vulputate vitae. Maecenas id orci ullamcorper, feugiat nulla ac, dignissim quam. Nullam faucibus consequat ligula malesuada luctus. Quisque lobortis quis felis et laoreet. Curabitur euismod ac diam quis ullamcorper. Sed at orci enim. Mauris hendrerit leo vel placerat finibus. Fusce eleifend hendrerit facilisis. Nullam nec lorem non est fermentum rhoncus at ut enim.",
        previewType: "video",
        previewUrl: "https://archive.org/download/Popeye_forPresident/Popeye_forPresident_512kb.mp4"
    }
]

export const latestProjects = [
    allProjects[0],
    allProjects[1],
    allProjects[2]
]

export const projectsByCategories = [
    allProjects.slice(0, 4),
    allProjects.slice(4, 5),
    allProjects.slice(5, 7),
    allProjects.slice(7, 11)
]