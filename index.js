document.addEventListener("DOMContentLoaded", () => {
	try {
		const sections = document.getElementsByTagName("section");
		if (sections.length > 0) {
			const firstSection = sections.item(0);
			const firstSectionParent = firstSection.parentNode;

			const h2 = document.createElement("h2");
			h2.textContent = "Obsah";
			const ul = document.createElement("ul");
			const lis = Array.prototype.map.call(sections, section => {
				const li = document.createElement("li");
				const a = document.createElement("a");
				a.href = `#${section.id}`;
				a.textContent = section.getElementsByTagName("h2").item(0).textContent;
				li.append(a);
				return li;
			});
			ul.append(...lis);

			firstSectionParent.insertBefore(h2, firstSection);
			firstSectionParent.insertBefore(ul, firstSection);
		}
	} catch(e) {
		console.warn("An error occured.", e);
	}
});
