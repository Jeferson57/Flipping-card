# Flipping card UI design

## Flipping card

Flipping the card is when the user does the :hover action on an element and an animation is generated that shows the contents behind an element.

## Screenshot

![Card ui design.png](./images/Card%20ui%20design.png)

## What I learned

- Set a 3D space for elements
- Show the back face of an item
- Make the animation when the user does :hover on the element

## My process

### HTML

To make this animation we need a parent element and two child elements, one will be the front face and the other the back face:

```html
<section>
	<div class="container">
		<div class="card front-face"></div>
		<div class="card back-face"></div>
	</div>
</section>
```

### CSS

In order to show the back face of an element we must use the `backface-visibility` property. In this case we are going to use it for the child elements that represent the faces of the card:

```css
.container .card {
	backface-visibility: hidden;
}
```

When we have the styles for the back face we must turn it 180 degree on the Y axis with the `transform` property:

```css
.card.back-face {
	transform: rotateY(180deg);
}
```

Now, to create the rotation effect we are going to use the pseudo-class `:hover` in the container and we are going to rotate it 180 degrees on the Y axis.

```css
.container:hover {
    transform: rotateY(180deg);
}
```

And finally, we set a 3D space for the child elements and set a time for the transition in the container element:

```css
.container {
	transform-style: preserve-3d;
	transition: 0.6s;
}
```

We can also determine a distance on the Z-axis to give some perspective to 3D space. We do this in the parent element of the container:

```css
section {
    perspective: 1000px;
}
```

## **Useful resources**

[CodingLab](https://www.youtube.com/@CodingLabYT/featured)

- [https://youtu.be/20Qb7pNMv-4](https://youtu.be/20Qb7pNMv-4)

[MDN CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)

- [Perspective](https://developer.mozilla.org/es/docs/Web/CSS/perspective)
- [Transform](https://developer.mozilla.org/es/docs/Web/CSS/transform)
- [Transition](https://developer.mozilla.org/es/docs/Web/CSS/transition)
- [Backface-visibility](https://developer.mozilla.org/es/docs/Web/CSS/backface-visibility)