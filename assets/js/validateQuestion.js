function handlePage(pag, correctMessage, incorrectMessage, correctOptionIndex) {
    var page = document.querySelector(pag);
    var list = page.querySelector(".page_list");
    var options = list.querySelectorAll(".page_option");
    var result = list.querySelector(".page_result");

    options.forEach(function(option, index) {
        option.addEventListener("click", function() {
            if (index === correctOptionIndex) {
                option.classList.add("correct");
                result.innerHTML = correctMessage;
            } else {
                option.classList.add("incorrect");
                result.innerHTML = incorrectMessage;
            }
        });
    });
}

handlePage("#PageOne", "Excellent! That is correct!", "Incorrect! Try Again!", 1);
handlePage("#PageTwo", "Excellent! That is correct!", "Incorrect! Try Again!", 1);
handlePage("#PageThree", "Excellent! That is correct!", "Incorrect! Try Again!", 1);
handlePage("#PageFour", "Excellent! That is correct!", "Incorrect! Try Again!", 0);
handlePage("#PageFive", "Excellent! That is correct!", "Incorrect! Try Again!", 1);
handlePage("#PageSix", "Excellent! That is correct!", "Incorrect! Try Again!", 0);
handlePage("#PageSeven", "Excellent! That is correct!", "Incorrect! Try Again!", 0);
handlePage("#PageEight", "Excellent! That is correct!", "Incorrect! Try Again!", 1);
handlePage("#PageNine", "Excellent! That is correct!", "Incorrect! Try Again!", 2);