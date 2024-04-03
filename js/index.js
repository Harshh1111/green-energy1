// JavaScript Object for Content
const content = {
  "Solution 1":
    "<h2>Investment in Research and Development:</h2><p>Governments, private organizations, and research institutions can allocate funding for R&D initiatives aimed at developing more efficient and cost-effective green energy technologies.Research can focus on improving the efficiency of renewable energy generation methods such as solar panels, wind turbines, and energy storage systems.</p>",
  "Solution 2":
    "<h2>Policy Support and Incentives:</h2><p>Governments can implement policies and provide financial incentives to encourage the adoption of green energy technologies.Subsidies, tax credits, and feed-in tariffs can help reduce the upfront costs of installing renewable energy systems for residential, commercial, and industrial users.</p>",
  "Solution 3":
    "<h2>Infrastructure Investment and Grid Modernization:</h2><p>Investment in infrastructure, such as upgrading transmission and distribution networks, can improve the integration of renewable energy into the existing power grid.Smart grid technologies enable better management of fluctuating renewable energy sources, reducing the need for costly backup power and storage solutions.</p>",
};

// Initial Content Display
document.getElementById("button1").classList.add("active-button");
document.getElementById("content").innerHTML = content["Solution 1"];

// Button Click Event
document.querySelectorAll(".buttons button").forEach((button) => {
  button.addEventListener("click", function () {
    document.querySelector(".active-button").classList.remove("active-button");
    this.classList.add("active-button");
    document.getElementById("content").innerHTML = content[this.textContent];
  });
});
