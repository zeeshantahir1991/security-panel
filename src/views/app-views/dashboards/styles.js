import { AppColors, colorWithOpacity } from './../../../assets/styles/colors'

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
    // searchButton: { paddingHorizontal: 100, width: '100%', borderRadius: 10, color: AppColors.newGrey, borderWidth: 1, borderStyle: 'solid', borderColor: AppColors.newGrey, backgroundColor: AppColors.white },
    searchButton: { paddingHorizontal: 100, width: '100%', borderRadius: 10, color: AppColors.newGrey, borderWidth: 1, borderStyle: 'solid', borderColor: AppColors.newGrey, backgroundColor: AppColors.white },
    // searchEnabledButton: { paddingHorizontal: 100, width: '100%', borderRadius: 10, color: AppColors.white, borderWidth: 1, borderStyle: 'solid', backgroundColor: AppColors.newGrey, borderColor: AppColors.newGrey },
    searchEnabledButton: { paddingHorizontal: 100, width: '100%', borderRadius: 10, color: AppColors.white, borderWidth: 1, borderStyle: 'solid', backgroundColor: AppColors.newGrey, borderColor: AppColors.newGrey },

}