import React from 'react'
import Dropdown from 'muicss/lib/react/dropdown';
import DropdownItem from 'muicss/lib/react/dropdown-item';

const DropDown = () => {
  let dropdownItems = [
    <DropdownItem key="1">Option 1</DropdownItem>,
    <DropdownItem key="2">Option 2</DropdownItem>
  ];
  return (
    <div>
      <div>
          <Dropdown color="primary" label="Dropdown">
            {dropdownItems}
          </Dropdown>
        </div>
      
    </div>
  )
}

export default DropDown
