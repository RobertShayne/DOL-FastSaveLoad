document.addEventListener('keydown', function(event) {
    if(event.key === '`')
    {
        //alert("load");
        var _slot = 0;
        Save.slots.load(_slot);
    }
    else if(event.key === '~')
    {
        var _slot = 0;
        //alert("save");
        //DoLSave.prepareSaveDetails();
        var saveId = random(10000, 99999);
        //var data = Save.slots.get(_slot);
        const success = Save.slots.save(_slot, null, {
            saveId: V.saveId,
            saveName: "fastsave",
            ironman: V.ironmanmode,
        });
		if(success)
		{
			Save.slots.load(_slot);
		}
        //alert("success");
    }
});