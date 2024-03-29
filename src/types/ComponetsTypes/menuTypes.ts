import { StyleProp, ViewProps, ViewStyle } from "react-native";

type MenuTypeUndelineProps = ViewProps &{
    style?: StyleProp<ViewStyle>;
    itensMenu:string[]
    itemSelected:string,
    setItenSelected:(iten:string)=>void
  }


type MenuTypeBoxProps={
  optionsMenu:{
    name:string    
    }[]
  selectContent : string
  setSelectContent:(item:string)=> void
  
}

export{MenuTypeUndelineProps, MenuTypeBoxProps}