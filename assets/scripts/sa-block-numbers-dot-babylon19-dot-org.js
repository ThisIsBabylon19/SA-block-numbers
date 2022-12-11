function checkFilter(input, column) {
    var searchText = input.value.toUpperCase,
        rows = document.querySelectorAll(".js-row");
    var cells, cellText;

    for(i = 0; i < rows.length; i++) {
//        cells = rows[i].querySelectorAll(".js-cell.is-" + what);
        cells = rows[i].querySelector(".js-cell.is-" + column);
        if(cells) {
            cellText = (cells.textContent || cells.innerText).toUpperCase;
            cellText = cellText.toString();
            alert(cellText.indexOf(searchText));
            if(cellText.indexOf(searchText) > -1) {
                rows[i].style.display = "";
//                alert("yes");
            } else {
                rows[i].style.display = "none";
//                alert("no");
            }
        }
    }
}