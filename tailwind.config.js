import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.jsx',
    ],

    theme: {
        extend: {
            screens: {
                'half': '884px',
                'bar-1': '1282px',
                'bar-2': '922px',
                'bar-3': '620px',
                'bar-4': '560px',
                'bar-5': '440px',
                'bar-6': '120px',
            },
            colors: {
                Navbar: '#19376D',
                Background: '#0B2447',
                Background_banner: '#5c3c23',
            },
            fontFamily: {
                Heebo: ['Heebo', 'sans-serif'],
                Dancing: ['Dancing Script', 'cursive']
            },
            
        },
    },

    plugins: [forms],
};
