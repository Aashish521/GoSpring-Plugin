/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps
 */
import { useBlockProps } from '@wordpress/block-editor';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
export default function Edit(props) {
	// var src1;
function updateContent($event){
	debugger
 props.setAttributes({content: $event.target.value})

 let Div=document.getElementById('pfrm')
 let textUrl= $event.target.value;
 if(textUrl==""){
	Div.innerHTML="";
 }

 const textArr=textUrl.split("/",3);

 if(textArr[2]=="gospring.ai"){

	
	
	
	Div.innerHTML=`<iframe id='frm' src='${textUrl}'></iframe>`

	// document.getElementById('frm').setAttribute('src',`${$event.target.value}`)
 }else{

	document.getElementById('frm').setAttribute('src',`https://firebasestorage.googleapis.com/v0/b/angular-sign-up-49cdf.appspot.com/o/del.png?alt=media&token=40fa6235-3cf6-4ad7-8c66-d9884135c944`)
 }
}

// function postion(){
// document.getElementById('frm').classList.toggle('frm2')

// }
	

	return (

		<div>
			 <div id="parentD">	
				<label id="label1">GoSpring Link</label><br/>
				<input id="input"  placeholder='Enter GoSpring quiz Link ' onChange={updateContent}></input><br/>
			</div>
			<div id="pfrm"></div>
		</div>
	);
}
