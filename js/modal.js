const modals = document.querySelectorAll("[data-modal]");

modals.forEach(function (trigger) {
    trigger.addEventListener("click", function (event) {
        event.preventDefault();
        const modal = document.getElementById(trigger.dataset.modal);
        modal.classList.add("open");
        const exits = modal.querySelectorAll(".modal-exit");
        exits.forEach(function (exit) {
            exit.addEventListener("click", function (event) {
                event.preventDefault();
                modal.classList.remove("open");
            });
        });
    });
});

// So what we are doing is selecting all the data-modal attributes elements and loop over them.
// These are our triggers, so we need to add an eventListener for the click trigger.
// Once the click is triggered, we find the modal based on the dataset and add the open class to it.
// We then search for all the modal-exit classes within the modal. Which are the background and the cross button.
