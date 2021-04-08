import { AppColors } from './../../../../assets/styles/colors'

export const componentStyles = {
    container: {
        // minHeight: '80vh',
        backgroundColor: AppColors.white,
        textAlign: 'center'
    },

    companyInfoContainer: { borderRadius: 10, padding: 20, backgroundColor: AppColors.white },

    borderColor: { borderColor: AppColors.alto },

    continueButton: { borderRadius: 10, color: AppColors.newGrey, borderWidth: 1, borderStyle: 'solid', borderColor: AppColors.newGrey },
    cancelButton: { borderRadius: 10, color: AppColors.radicalRed, borderWidth: 1, borderStyle: 'solid', borderColor: AppColors.radicalRed },
    applyCode: { borderRadius: 10, color: AppColors.newGrey, borderWidth: 1, borderStyle: 'solid', borderColor: AppColors.newGrey, marginLeft: 20 },
    promoAppliedDesc: { color: AppColors.conifer }

}