## Project Day 03: Toggle Password Visibility
[Go Make Things](https://gomakethings.com/)

For our Day 3 project, we’re going to take our toggle password script and add the ability to toggle the visibility of multiple fields.


####The Template
When a user clicks on the #show-passwords checkbox, it should show the text for the #current-password and #new-password fields if it’s checked, and mask it if it’s unchecked.


```html
<form>
	<div>
		<label for="current-password">Current Password</label>
		<input type="password" name="current-password" id="current-password">
	</div>

	<div>
		<label for="new-password">New Password</label>
		<input type="password" name="new-password" id="new-password">
	</div>

	<div>
		<label for="show-passwords">
			<input type="checkbox" name="show-passwords" id="show-passwords">
			Show passwords
		</label>
	</div>

	<p>
		<button type="submit">Change Passwords</button>
	</p>
</form>
```