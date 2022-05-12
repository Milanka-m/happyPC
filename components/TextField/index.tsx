import * as React from 'react';
import clsx from 'clsx';
import { withStyles, WithStyles } from '@mui/styles';
import MuiTextField, {
  FilledTextFieldProps,
  StandardTextFieldProps,
} from '@mui/material/TextField';

const inputStyleMapping = {
  small: 'inputSizeSmall',
  medium: 'inputSizeMedium',
  large: 'inputSizeLarge',
  xlarge: 'inputSizeXlarge',
};

const styles = () => ({
  root: {
    padding: 0,
    'label + &': {
      marginTop: 20,
    },
  },
  input: {
    backgroundColor: '#fff',
    '&$disabled': {
      backgroundColor: '#eee',
    },
  },
  inputBorder: {
    border: '1px solid green',
    borderRadius: 5,
    '&:focus': {
      borderColor: '#7e2323',
    },
    '&:hover': {
      borderColor: '#f7bd17',
    }
  },
  disabled: {},
  [inputStyleMapping.small]: {
    fontSize: 14,
    padding: 10,
    width: `calc(100% - ${10 * 2}px)`,
  },
  [inputStyleMapping.medium]: {
    fontSize: 16,
    padding: 15,
    width: `calc(100% - ${15 * 2}px)`,
  },
  [inputStyleMapping.large]: {
    fontSize: 18,
    padding: 20,
    width: `calc(100% - ${20 * 2}px)`,
  },
  [inputStyleMapping.xlarge]: {
    fontSize: 20,
    padding: 25,
    width: `calc(100% - ${25 * 2}px)`,
  },
  formLabel: {
    fontSize: 20,
  },
  select: {
    height: 'auto',
    borderRadius: 0,
  },
  selectIcon: {
    top: '50%',
    marginTop: -12,
  },
});

export interface OnePirateTextFieldProps
  extends Omit<FilledTextFieldProps | StandardTextFieldProps, 'size'> {
  noBorder?: boolean;
  size?: 'small' | 'medium' | 'large' | 'xlarge';
}

function TextField(props: OnePirateTextFieldProps & WithStyles<typeof styles>) {
  const {
    classes,
    InputProps = {},
    InputLabelProps,
    noBorder,
    size = 'medium',
    SelectProps,
    ...other
  } = props;

  const {
    classes: { input: InputPropsClassesInput, ...InputPropsClassesOther } = {},
    ...InputPropsOther
  } = InputProps;

  return (
    <MuiTextField
      InputProps={{
        classes: {
          root: classes.root,
          input: clsx(
            classes.input,
            classes[inputStyleMapping[size]],
            {
              [classes.inputBorder]: !noBorder,
            },
            InputPropsClassesInput,
          ),
          disabled: classes.disabled,
          ...InputPropsClassesOther,
        },
        disableUnderline: true,
        ...InputPropsOther,
      }}
      InputLabelProps={{
        ...InputLabelProps,
        shrink: true,
        className: classes.formLabel,
      }}
      SelectProps={{
        ...SelectProps,
        classes: {
          select: classes.select,
          icon: classes.selectIcon,
        },
      }}
      {...other}
    />
  );
}

export default withStyles(styles)(TextField);