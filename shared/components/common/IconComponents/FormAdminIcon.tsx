

interface IProps {
    color?: string;
}
const FormAdminIcon = ({ color = "white" }: IProps) => {
    return (


        <svg width="17" height="21" viewBox="0 0 17 21" fill={`${color}`} xmlns="http://www.w3.org/2000/svg">
            <path d="M12.75 1.15625H4.75C2.817 1.15625 1.25 2.72325 1.25 4.65625V16.1562C1.25 18.0892 2.817 19.6562 4.75 19.6562H12.75C14.683 19.6562 16.25 18.0892 16.25 16.1562V4.65625C16.25 2.72325 14.683 1.15625 12.75 1.15625Z" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M5.25 5.16406H12.25M5.25 9.16406H12.25M5.25 13.1641H8.75" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
    );
};

export default FormAdminIcon;



