## Project Day 01: Toggle Password Visibility
[Go Make Things](https://gomakethings.com/)

For our first project, we’re going to write a script that let’s users toggle the visibility of a password field.


####The Template
When a user clicks the #show-password checkbox, the #password field should display the password in plain text if the box is checked, or mask it if it’s not.


```html
<form>
	<div>
		<label for="username">Username</label>
		<input type="text" name="username" id="username">
	</div>

	<div>
		<label for="password">Password</label>
		<input type="password" name="password" id="password">
	</div>

	<div>
		<label for="show-password">
			<input type="checkbox" name="show-passwords" id="show-password">
			Show password
		</label>
	</div>

	<p>
		<button type="submit">Log In</button>
	</p>
</form>
```