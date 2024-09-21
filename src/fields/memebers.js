const { format_date } = require("../utils/helpers");

exports.MemberFields = [
  {
    label: "Full Name",
    key: "first_name",
  },
  {
    label: "Email Address",
    key: "user_id",
    format:(value)=>value?.email
  },

  {
    label: "Street Address",
    key: "address",
  },

  {
    label: "City",
    key: "city",
  },
  {
    label: "Country",
    key: "country",
  },
  {
    label: "Country Code",
    key: "country_code",
  },
  {
    label: "Phone Number",
    key: "phone_number",
  
  },
  {
    label: "Occupation",
    key: "occupation",
  
  },
  {
    label: "Date of birth",
    key: "date_of_birth",
    format:format_date
  },
  {
    label:"Gender",
    key:"gender"
  },
  {
    label:"Marital Status",
    key:"relationship_status"
  },
  

];
// export const MemberFields = [
//   {
//     id: 'first_name',  // Unique ID for the column
//     header: 'Full Name',
//     accessorKey: 'first_name',
//   },
//   // {
//   //   id: 'email_address',  // Unique ID for the column
//   //   header: 'Email Address',
//   //   accessorKey: 'user_id',
//   //   cell: (info) => info.getValue()?.email, // Custom rendering function
//   // },
//   {
//     id: 'street_address',  // Unique ID for the column
//     header: 'Street Address',
//     accessorKey: 'address',
//   },
//   {
//     id: 'city',  // Unique ID for the column
//     header: 'City',
//     accessorKey: 'city',
//   },
//   {
//     id: 'country',  // Unique ID for the column
//     header: 'Country',
//     accessorKey: 'country',
//   },
//   {
//     id: 'country_code',  // Unique ID for the column
//     header: 'Country Code',
//     accessorKey: 'country_code',
//   },
//   {
//     id: 'phone_number',  // Unique ID for the column
//     header: 'Phone Number',
//     accessorKey: 'phone_number',
//   },
//   {
//     id: 'occupation',  // Unique ID for the column
//     header: 'Occupation',
//     accessorKey: 'occupation',
//   },
//   {
//     id: 'date_of_birth',  // Unique ID for the column
//     header: 'Date of Birth',
//     accessorKey: 'date_of_birth',
//     cell: (info) => format_date(info.getValue()), // Custom formatting function
//   },
//   {
//     id: 'gender',  // Unique ID for the column
//     header: 'Gender',
//     accessorKey: 'gender',
//   },
//   {
//     id: 'marital_status',  // Unique ID for the column
//     header: 'Marital Status',
//     accessorKey: 'relationship_status',
//   },
// ];
