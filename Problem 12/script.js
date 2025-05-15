        const secondItem = document.getElementById('item2');

        secondItem.addEventListener('click', function() {
            // Display the text content of its parent node
            alert(secondItem.parentNode.textContent.trim());

            // Log the text content of its next sibling 
            const nextSibling = secondItem.nextElementSibling;
            if (nextSibling) {
                console.log('Next Sibling:', nextSibling.textContent.trim());
            } else {
                console.log('Next Sibling: None');
            }

            // Log the text content of its previous sibling 
            const previousSibling = secondItem.previousElementSibling;
            if (previousSibling) {
                console.log('Previous Sibling:', previousSibling.textContent.trim());
            } else {
                console.log('Previous Sibling: None');
            }
        });
    