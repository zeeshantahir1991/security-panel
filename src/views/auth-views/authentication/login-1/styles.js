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
    signInButton: { borderRadius: 10, color: AppColors.cornFlowerBlue, borderWidth: 1, borderStyle: 'solid', borderColor: AppColors.cornFlowerBlue }
}