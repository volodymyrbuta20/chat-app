export const customStyles = {
  container: (defaultStyles) => ({
    ...defaultStyles,
    width: '100%'
  }),

  control: (defaultStyles, state) => ({
    ...defaultStyles,
    marginTop: '20px',
    backgroundColor: '#393f54cc',
    padding: '12px 20px',
    border: '1px solid #757575',
    borderBottom: '3px solid #57E6E6',
    borderRadius: '8px',
    boxShadow: 'none',
    ':hover': {
      border: '1px solid #757575',
      borderBottom: '3px solid #57E6E6'
    },
    outline: state.isFocused ? '1px solid #57E6E6' : 'none'
  }),

  indicatorSeparator: () => ({
    display: 'none'
  }),

  dropdownIndicator: (defaultStyles) => ({
    ...defaultStyles,
    padding: 0,
    color: '#757575'
  }),

  valueContainer: (defaultStyles) => ({
    ...defaultStyles,
    padding: 0
  }),

  placeholder: (defaultStyles) => ({
    ...defaultStyles,
    padding: 0,
    margin: 0,
    fontSize: '16px',
    fontWeight: '500',
    color: '#757575'
  }),

  input: (defaultStyles) => ({
    ...defaultStyles,
    padding: 0,
    margin: 0,
    color: '#959595'
  }),

  menu: (defaultStyles) => ({
    ...defaultStyles,
    backgroundColor: '#363A51'
  }),

  menuList: (defaultStyles) => ({
    ...defaultStyles,
    '::-webkit-scrollbar': {
      width: '4px',
      backgroundColor: 'transparent'
    },
    '::-webkit-scrollbar-thumb': {
      background: '#3ba079',
      borderRadius: '8px'
    }
  }),

  singleValue: (defaultStyles) => ({
    ...defaultStyles,
    color: '#959595'
  })
};
