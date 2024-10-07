function display(itemToPrint) {
    handleDisplay('<br/>');
    handleDisplay(itemToPrint);
  }
  
  function handleDisplay(itemToPrint, level = 0, propertyName = null) {
    if (typeof itemToPrint === 'object' && itemToPrint !== null) {
      printObject(itemToPrint, level + 1, propertyName);
      return;
    }
  
    const div = document.createElement('div');
    const indent = '&nbsp;'.repeat(level * 2);
    const prefix = propertyName ? propertyName + ':' : '';
    if (typeof itemToPrint === 'function') {
      if (propertyName === 'constructor') return;
      else div.innerHTML = `${indent}${prefix} function()`;
    } else {
      div.innerHTML = `${indent}${prefix} ${itemToPrint}`;
    }
  
    document.getElementById('content').appendChild(div);
  }
  
  function printObject(obj, level, propertyName) {
    if (!propertyName) {
      Array.isArray(obj)
        ? handleDisplay('[Array]')
        : handleDisplay(obj.constructor.name);
    }
  
    let openBracket;
    let closeBracket;
    if (Array.isArray(obj)) {
      openBracket = '[';
      closeBracket = ']';
    } else {
      openBracket = '{';
      closeBracket = '}';
    }
  
    const prefix = propertyName ? propertyName + ': ' + openBracket : openBracket;
    const indent = propertyName ? '&nbsp;&nbsp;' : '';
    handleDisplay(`${indent}${prefix}`);
    for (let propName of Object.getOwnPropertyNames(obj)) {
      handleDisplay(obj[propName], level, propName);
    }
    // for (const key in obj) {
    //   console.log('here');
    //   handleDisplay(obj[key], level, key);
    // }
    handleDisplay(closeBracket, level - 1);
  }
  
  function comment(text_to_print) {
    const br = document.createElement('br');
    document.getElementById('content').appendChild(br);
    const div = document.createElement('div');
    div.innerHTML = `<i style="font-size: 0.9em;">${text_to_print}</i>`;
    document.getElementById('content').appendChild(div);
  }


  function printSectionTitle(text_to_print) {
    const br = document.createElement('br');
    document.getElementById('content').appendChild(br);
    const div = document.createElement('div');
    div.innerHTML = `<strong style="font-size: 1.2em;">${text_to_print}</strong>`;
    document.getElementById('content').appendChild(div);
  }