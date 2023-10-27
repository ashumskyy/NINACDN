
const copyButtons = document.querySelectorAll('.embed-btn');


copyButtons.forEach((el) => el.addEventListener('click', copyEmbedCode));


function copyEmbedCode(e){
        /* Get the text field */
    //   var copyText = document.getElementById("myInput");
    const streamItem = this.closest('.stream-item');
    const embedArea = streamItem.querySelector('.embed-ta');

    //   /* Select the text field */
    embedArea.select();
    embedArea.setSelectionRange(0, 99999); /* For mobile devices */

    /* Copy the text inside the text field */
    //   navigator.clipboard.writeText(copyText.value);
    navigator.clipboard.writeText(embedArea.value);
    /* Alert the copied text */
    // alert("Copied the text: " + embedArea.value);

    const embedDiv = this.closest('.copy-embed-div');
    const copyAnim = embedDiv.querySelector('.copy-anim');
    copyAnim.classList.add('show-anim');

    setTimeout(function(){copyAnim.classList.remove('show-anim');},3000);

}
