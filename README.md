# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

<div
          className="inner w-screen h-full flex items-center justify-center"
          onClick={goToNextImage}
        >
          <img
            src={images[0].src}
            className="w-[90vw] h-[83vh] object-cover border-2 border-gray-600  rounded-lg img-shad"
            alt={images.alt}
            onError={handleError}
          />
        </div>

        // {images.map((img, index) => (

// <div
// key={index}
// className="inner w-screen h-full flex items-center justify-center"
// onClick={goToNextImage}
// >
// <img
// src={img.src}
// className="w-[90vw] h-[77vh] object-cover rounded-lg shadow-lg"
// alt={img.alt}
// onError={handleError}
// />
// </div>
// ))}
