// right vertical gallery
const slideGallery = document.querySelector('.slides');
const slides = slideGallery.querySelectorAll('div');
const scrollbarThumb = document.querySelector('.thumb');
const slideCount = slides.length;
const slideHeight = 720;
const marginTop = 16;
const scrollThumb = () => {
  const index = Math.floor(slideGallery.scrollTop / slideHeight);
  scrollbarThumb.style.height = `${((index + 1) / slideCount) * slideHeight}px`;
};
const scrollToElement = el => {
  const index = parseInt(el.dataset.id, 10);
  slideGallery.scrollTo(0, index * slideHeight + marginTop);
};
document.querySelector('.thumbnails').innerHTML += [...slides]
  .map(
    (slide, i) => `<img src="${slide.querySelector('img').src}" data-id="${i}">`
  )
  .join('');
document.querySelectorAll('.thumbnails img').forEach(el => {
  el.addEventListener('click', () => scrollToElement(el));
});
slideGallery.addEventListener('scroll', e => scrollThumb());
scrollThumb();

// testimonials
window.addEventListener("load", function () {
	document.getElementById("loader_testi").style.display = "none";
	document.getElementById("box_testi").style.display = "block";
});
const testimonials = [
	{
		name: "Eva Sawyer",
		job: "CEO, Fashworks",
		image: "https://i.postimg.cc/gJDkZrNn/profile-image-1.png",
		testimonial:
			"Neque volutpat ac tincidunt vitae semper quis lectus nulla at volutpat diam ut venenatis tellus in metus vulputate eu scelerisque felis imperdiet proin fermentum leo vel orci porta non pulvinar neque laoreet suspendisse interdum consectetur"
	},
	{
		name: "Katey Topaz",
		job: "Developer, TechCrew",
		image: "https://i.postimg.cc/8kZzkJ7Y/profile-image-2.png",
		testimonial:
			"Elementum tempus egestas sed sed risus pretium quam vulputate dignissim suspendisse in est ante in nibh mauris cursus mattis molestie a iaculis at erat pellentesque adipiscing commodo elit at imperdiet dui accumsan sit amet nulla"
	},
	{
		name: "Jae Robin",
		job: "UI Designer, Affinity Agency",
		image: "https://i.postimg.cc/90gmLK32/profile-image-3.png",
		testimonial:
			"Orci nulla pellentesque dignissim enim sit amet venenatis urna cursus eget nunc scelerisque viverra mauris in aliquam sem fringilla ut morbi tincidunt augue interdum velit euismod in pellentesque massa placerat duis ultricies lacus sed turpis"
	},
	{
		name: "Nicola Blakely",
		job: "CEO,Zeal Wheels",
		image: "https://i.postimg.cc/6qp6Lwmz/profile-image-4.png",
		testimonial:
			"Sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit"
	}
];
let i = 0; // current slide
let j = testimonials.length; // total slides
let testimonialContainer = document.getElementById("testimonial-container");
function next() {
	i = (j + i + 1) % j;
	displayTestimonial();
}

function prev() {
	i = (j + i - 1) % j;
	displayTestimonial();
}
let displayTestimonial = () => {
	testimonialContainer.innerHTML = `
        <p>${testimonials[i].testimonial}</p>
        <img src=${testimonials[i].image}></img>
        <h3>${testimonials[i].name}</h3>
        <h6>${testimonials[i].job}</h6>
        `;
};
window.onload = displayTestimonial;
