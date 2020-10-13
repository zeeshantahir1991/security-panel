import { AppColors, colorWithOpacity } from './../../../../assets/styles/colors'
import { AppStyles } from './../../../../assets/styles/index'

export const componentStyles = {
    container: {
        // minHeight: '80vh',
        backgroundColor: AppColors.white,
        textAlign: 'center'
    },

    companyInfoContainer: { borderRadius: 10, padding: 20, backgroundColor: AppColors.white },

    borderColor: { borderColor: AppColors.alto },
    personalInfoContainer: { borderRadius: 10, padding: 20, marginTop: 50, marginBottom: 25, backgroundColor: AppColors.white },
    continueButton: { borderRadius: 10, color: AppColors.cornFlowerBlue, borderWidth: 1, borderStyle: 'solid', borderColor: AppColors.cornFlowerBlue },
    selectStyle: {
        width: '100%',
        borderWidth: 1,
        borderColor: AppColors.alto,
        borderStyle: 'solid',
        borderRadius: 10,
        marginRight: 20
    },
}