import { AppColors, colorWithOpacity } from './../../assets/styles/colors'

export const componentStyles = {
    container: {
        // minHeight: '80vh',
        backgroundColor: AppColors.white,
        textAlign: 'center'
    },

    borderColor: { borderColor: AppColors.alto },

    selectStyle: {
        width: '100%',
        borderWidth: 1,
        borderColor: AppColors.alto,
        borderStyle: 'solid',
        borderRadius: 10,
        marginRight: 20
    },

    selectStyleSM: {
        width: '100%',
        borderWidth: 1,
        borderColor: AppColors.alto,
        borderStyle: 'solid',
        borderRadius: 10,
        marginTop: 20
    },
    searchButton: { paddingHorizontal: 100, width: '100%', borderRadius: 10, color: AppColors.cornFlowerBlue, borderWidth: 1, borderStyle: 'solid', borderColor: AppColors.cornFlowerBlue, backgroundColor: AppColors.white },
    searchEnabledButton: { paddingHorizontal: 100, width: '100%', borderRadius: 10, color: AppColors.white, borderWidth: 1, borderStyle: 'solid', backgroundColor: AppColors.cornFlowerBlue, borderColor: AppColors.cornFlowerBlue },



    subMenuBackgroundColor: {
        // backgroundColor: AppColors.alabaster
        // backgroundColor: "#60b0f4"
        backgroundColor: AppColors.twilightBlue
    }
}