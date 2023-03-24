import { ColumnFilter } from "./columnFilter"
import { format } from 'date-fns'


export  const COLUMNS =[
    {
        Header: 'Id',
        accessor: 'id',
        Filter: ColumnFilter,
        disableFilters : true
    },
    {
        Header: 'First name',
        accessor: 'first_name',
        Filter: ColumnFilter
    },
    {
        Header: 'Last name',
        accessor: 'last_name',
        Filter: ColumnFilter
    },
    {
        Header: 'Date of birth',
        accessor: 'date_of_birth',
        Filter: ColumnFilter,
        Cell: ({value}) => {return format(new Date(value), 'dd/MM/yyyy')},
    },
    {
        Header: 'Country',
        accessor: 'country',
        Filter: ColumnFilter
    },
    {
        Header: 'Phone',
        accessor: 'phone',
        Filter: ColumnFilter
    }
]