var code;

function createCode() {
    code = "";
    var codeLength = 4;
    var checkCode = document.getElementById("code");
    var random = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9,
        'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J',
        'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R',
        'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
        'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j',
        'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r',
        's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    for (var i = 0; i < codeLength; i++) {
        var index = Math.floor(Math.random() * 62);
        code += random[index];
    }
    checkCode.value = code;
}

function validate() {
    var inputCode = document.getElementById("input").value;
    if (inputCode.length <= 0) {
        alert("write down the identifying code！");
    } else if (inputCode !== code) {
        alert("Wrong with your code！");
        createCode();
        document.getElementById("input").value = "";
    } else {
        alert("you can continue right now");
    }
}

