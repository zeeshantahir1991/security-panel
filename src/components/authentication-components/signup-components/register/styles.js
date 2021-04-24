import { AppColors } from './../../../../assets/styles/colors'

export const componentStyles = {
    container: {
        // minHeight: '80vh',
        backgroundColor: AppColors.white,
        textAlign: 'center'
    },

    companyInfoContainer: { borderRadius: 10, padding: 20, backgroundColor: AppColors.white },
    datePicker: { borderColor: AppColors.alto, width: '100%' },

    borderColor: { borderColor: AppColors.alto },
    personalInfoContainer: { borderRadius: 10, padding: 20, marginTop: 50, marginBottom: 25, backgroundColor: AppColors.white },
    signUpButton: { borderRadius: 10, color: AppColors.newGrey, borderWidth: 1, borderStyle: 'solid', borderColor: AppColors.newGrey },
    selectStyle: {
        width: '100%',
        borderWidth: 1,
        borderColor: AppColors.alto,
        borderStyle: 'solid',
        borderRadius: 10,
        marginRight: 20
    },
}