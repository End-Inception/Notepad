function saveText() {
    const text = document.getElementById("notepad").value;
    const blob = new Blob([text], { type: "text/plain" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "notepad.txt";
    link.click();
}
