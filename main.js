const subscribes = document.querySelectorAll(".subscribes");

subscribes.forEach((subscribe) => {
  const target = subscribe.getAttribute("data-target");
  let count = 0;

  const updateSubscribe = () => {
    const increment = target / 5000;
    subscribe.innerText = count;
    count += increment;

    if (count < target) {
      setTimeout(updateSubscribe, 1);
    }
  };
  updateSubscribe();
});
