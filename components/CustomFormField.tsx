import {
   
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
  } from "@/components/ui/form"
  import { Input } from "@/components/ui/input"
  import { Control } from "react-hook-form"
import { FormFieldType } from "./ModalForm"
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import { E164Number } from "libphonenumber-js/core"
import Image from "next/image"
import ReactDatePicker from "react-datepicker";
import calender from "@/public/calendar.svg"

import "react-datepicker/dist/react-datepicker.css";



  interface CustomProps {
    control: Control<any>,
    fieldType: FormFieldType,
    name: string,
    label?: string,
    placeholder?: string,
    disabled?: boolean,
    dateFormat?: string,
    showTimeSelect?: boolean,
    children?: React.ReactNode,
    renderSkeleton?: (field: any) => React.ReactNode,
    
  }

  const RenderField = ( { field, props}: {field: any; props: CustomProps }) => {
    const { fieldType, label, showTimeSelect ,dateFormat, renderSkeleton} = props;
    
    switch (fieldType) {
        case FormFieldType.INPUT:
             return(
                <div className="border-1px border-[#E1E1E1] ">
                 
                 <FormControl>
                    <Input
                    {...field} />
                 </FormControl>
                </div>
             ) ; case FormFieldType.PHONE_INPUT:
             return (
                
                <FormControl>
                    <PhoneInput 
                    defaultCountry="NG"
                    international
                    withCountryCallingCode
                    value={field.value as E164Number | undefined }
                    onChange={field.onChange} 
                    className="mt-2 h-12 rounded-md px-3 text-sm border outline-none input-phone-number "/>
                </FormControl>
                 
             ) ; case FormFieldType.DATE_PICKER:
                 
             return(
                <div className="flex rounded-md border">
                <Image
                src={calender}
                alt="calender"
                width={24}
                height={24}
                className="ml-2" />
               
               <FormControl>
               <ReactDatePicker selected={field.value} onChange={(date) => field.onChange(date)}
               dateFormat={dateFormat ?? 'MM/dd/yyyy'}
               showTimeSelect={showTimeSelect ?? false} 
               timeInputLabel="Time:"
               wrapperClassName="overflow-hidden border-transparent w-full h-12 text-14-medium rounded-md px-3 outline-none appearance-none !important;"/>
               </FormControl>
                </div>
             ) ; 
             case FormFieldType.SKELETON:
                return (
                    renderSkeleton ? renderSkeleton(field) 
                    : null
                )
          


        default:
            break;
    }
    
  }

const CustomFormField = (props: CustomProps ) => {
    const { control, fieldType, name, label } = props;

  return (
    <FormField
    control={control}
    name={name}
    render={({ field }) => (
      <FormItem className="flex-1">
        {fieldType !== FormFieldType.CHECKBOX && label  && (
            <FormLabel>{label}</FormLabel>
        )}

        <RenderField field={field} props={props} />

        <FormMessage className="shad-error" 
  />
      </FormItem>
    )}
  />
  )
}

export default CustomFormField