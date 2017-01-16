###Internationalisation
Text component expects iKey property.
Instead of writing plain text in your application, use text component.
In utils/i18n.js you can describe your mappings for iKey: string for all the languages that
you want to use. English is default.
###File upload.
The component is straight forward. You should pass all the required props to make it work.
onFileUpload function takes as parameter 'event'. You can access uploaded file via
event.target.files[0] (be sure to check files.length > 0 before accessing [0]).
###Notifications / error handling.
To create new notification all you have to do is call createNotification function, located
in utils/utils.js.
###Modal-Forms
* To create a new modal-form you should first call the modal in Root, responding to some url.
Your 'formName' that is extracted from url should be after the second '/'.For example
'pods/editor/addPod'. addPod is your formName.
If you want to change that, change the getCurrentModalForm function in utils/utils.js file
* Once you do that, there are some generic functions there that you don't need to touch.
They will extract formName from url and inputName and inputValue they are taking as parameters
with forEach from handleKeyDown which is also generic. 'Enter' key is also supported.
* handleInputChange and handleKeyDown will use getCurrentModalForm function to get the formName
from the url and work their magic.
* handleFormSubmit is generic function. For handleFormSubmit to work you should 'connect' an action with 'bindActionCreators'
 in the same ModalFormContainer. The name should be the following. submitYouFormNameForm.
 e.g. The url for that form should be some/url/yourFormName.
* isButtonDisabled is also generic. For isButtonDisabled to work properly you should pass has'FormName'ValidationError
 prop to the Container. There is generic function for that which you can use
 hasFormNameValidationError: formHasValidationErrorSelector(state, 'formName') // you can substitute formName with whatever
 * You should describe your form UI in renderForm function. Form component uses composition for pattern.
 You can pass multiple FormGroupComponents. For both those component to work you should pass the required props (take a look at them).
 * Finally you can extend validate function. The function switches on formName and there you can use different (that you will implement on your own)
 functions for validation. They are expected to return and object which has hasError and errorMessage properties. You can look at the examples
 in utils/validate.js
P.S. if you want to make only Form, without modal, extract the logic away from ModalFormContainer
