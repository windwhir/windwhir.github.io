function txtSaver(text,name = "windwhir.top+download"){
        let blob = new Blob([text]);
        let url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = name+'.txt';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
}