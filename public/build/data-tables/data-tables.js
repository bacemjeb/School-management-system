
$(document).ready(function () {

    /* -------------------------------------INITIALISATION----------------------------------- */

    var usersDt = null;
    var languagesDt = null;
    var regionsDt = null;
    var sectorsDt = null;
    var biddigTypeDt = null;
    var buyerTypeDt = null;
    var productTypeDt = null;
    var supplierTypeDt = null;
    var tenderTypeDt = null;
    var categoriesDt = null;
    var countriesDt = null;
    var postsDt = null;
    var supplierDt = null;
    var buyerDt = null;
    var tenderDt = null;
    var productDt = null;
    var demandDt = null;
    var emailDt = null;
    var bidDt = null;
    var commentDt = null;



    var datatableOptions = {
        layout: {
            theme: "default",
            class: "",
            scroll: !1,
            footer: !1
        },
        sortable: 'asc',
        pagination: true,
        translate: {
            records: {
                processing: 'Attendez...',
                noRecords: 'Aucune résultat trouvé'
            },
            toolbar: {
                pagination: {
                    items: {
                        default: {
                            first: 'Premier',
                            prev: 'Précédent',
                            next: 'Suivant',
                            last: 'Dernier',
                            more: 'Plus',
                            input: 'Numéro page',
                            select: 'Séléctionne la taille de la page'
                        },
                        info: 'Affichage de {{start}} - {{end}} de {{total}} résultats'
                    }
                }
            }
        }
    }
    init();

    /* -------------------------------------INITIALISATION END----------------------------------- */

    /* -------------------------------------EVENEMENTS SCROLL----------------------------------- */

    /* -------------------------------------EVENEMENTS SCROLL END----------------------------------- */



    /* -------------------------------------EVENEMENTS AUTOCOMPLETE----------------------------------- */

    /* -------------------------------------EVENEMENTS AUTOCOMPLETE END----------------------------------- */



    /* -------------------------------------EVENEMENTS CLICK----------------------------------- */
    $(document).on('click', '#user_filter_save', function (e) {
        usersDatatable();
        return false;
    });

    /* $(document).on('click', '#region_filter_save', function (e) {
        console.log('click');
        regionsDatatable();
        return false;
    });

    $(document).on('click', '#language_filter_save', function (e) {

        languagesDatatable();
        return false;
    });

    $(document).on('click', '#sector_filter_save', function (e) {

        sectorsDatatable();
        return false;
    });

    $(document).on('click', '#bidding_type_filter_save', function (e) {

        biddingTypeDatatable();
        return false;
    });


    $(document).on('click', '#buyer_type_filter_save', function (e) {

        buyerTypeDatatable();
        return false;
    });

    $(document).on('click', '#product_type_filter_save', function (e) {

        productTypeDatatable();
        return false;
    });

    $(document).on('click', '#supplier_type_filter_save', function (e) {

        supplierTypeDatatable();
        return false;
    });

    $(document).on('click', '#tender_type_filter_save', function (e) {

        tenderTypeDatatable();
        return false;
    });

    $(document).on('click', '#category_filter_save', function (e) {

        categoriesDatatable();
        return false;
    });


    $(document).on('click', '#country_filter_save', function (e) {

        countriesDatatable();
        return false;
    });

    $(document).on('click', '#post_filter_save', function (e) {

        postsDatatable();
        return false;
    });

    $(document).on('click', '#supplier_filter_save', function (e) {

        supplierDatatable();
        return false;
    });

    $(document).on('click', '#buyer_filter_save', function (e) {

        buyerDatatable();
        return false;
    });

    $(document).on('click', '#tender_filter_save', function (e) {

        tenderDatatable();
        return false;
    });
    
    $(document).on('click', '#supplier_product_filter_save', function (e) {

        productDatatable();
        return false;
    });
    
    $(document).on('click', '#demand_filter_save', function (e) {

        demandDatatable();
        return false;
    });
    
    $(document).on('click', '#email_save', function (e) {

        emailDatatable();
        return false;
    });
    
    $(document).on('click', '#bid_save', function (e) {

        bidDatatable();
        return false;
    });
    
    $(document).on('click', '#comment_save', function (e) {

        commentDatatable();
        return false;
    }); */

    $(document).on('click', '#deleteUser', function (e) {
        e.preventDefault();

        var idUser = $(this).attr('data-user');
        swal({title: "Êtes-vous sûr?", text: "Cette action est irréversible!", type: "warning", showCancelButton: !0, confirmButtonText: "Oui, supprimer!", cancelButtonText: "Non, annuler!"})
                .then(function (e) {
                    if (e.value) {

                        $.ajax({
                            type: 'GET',
                            url: Routing.generate('user_delete', {'id': idUser}),
                            dataType: "json",
                            success: function (datas) {
                                if (datas["success"]) {
                                    e.value && swal("Supprimé!", "L'utilisateur a été supprimé.", "success");
                                } else {
                                    e.value && swal("Supprimé!", "Impossible de supprimer un utilisateur connecté.", "error");
                                }
                                window.location.replace(Routing.generate('user_index'));
                            }
                        });
                    }
                });
    });

   /*  $(document).on('click', '#deleteRegion', function (e) {
        e.preventDefault();

        var idRegion = $(this).attr('data-region');
        swal({title: "Êtes-vous sûr?", text: "Cette action est irréversible!", type: "warning", showCancelButton: !0, confirmButtonText: "Oui, supprimer!", cancelButtonText: "Non, annuler!"})
                .then(function (e) {
                    if (e.value) {

                        $.ajax({
                            type: 'GET',
                            url: Routing.generate('region_delete', {'id': idRegion}),
                            dataType: "json",
                            success: function (datas) {
                                if (datas["success"]) {
                                    e.value && swal("Supprimé!", "Region a été supprimé.", "success");
                                } else {
                                    e.value && swal("Supprimé!", "Impossible de supprimer un Region.", "error");
                                }
                                window.location.replace(Routing.generate('region_index'));
                            }
                        });
                    }
                });
    });

    $(document).on('click', '#deleteLanguage', function (e) {
        e.preventDefault();

        var idLanguage = $(this).attr('data-language');
        swal({title: "Êtes-vous sûr?", text: "Cette action est irréversible!", type: "warning", showCancelButton: !0, confirmButtonText: "Oui, supprimer!", cancelButtonText: "Non, annuler!"})
                .then(function (e) {
                    if (e.value) {

                        $.ajax({
                            type: 'GET',
                            url: Routing.generate('language_delete', {'id': idLanguage}),
                            dataType: "json",
                            success: function (datas) {
                                if (datas["success"]) {
                                    e.value && swal("Supprimé!", "Langue a été supprimé.", "success");
                                } else {
                                    e.value && swal("Supprimé!", "Impossible de supprimer une Langue.", "error");
                                }
                                window.location.replace(Routing.generate('language_index'));
                            }
                        });
                    }
                });
    });

    $(document).on('click', '#deleteSector', function (e) {
        e.preventDefault();

        var idSector = $(this).attr('data-sector');
        swal({title: "Êtes-vous sûr?", text: "Cette action est irréversible!", type: "warning", showCancelButton: !0, confirmButtonText: "Oui, supprimer!", cancelButtonText: "Non, annuler!"})
                .then(function (e) {
                    if (e.value) {

                        $.ajax({
                            type: 'GET',
                            url: Routing.generate('sector_delete', {'id': idSector}),
                            dataType: "json",
                            success: function (datas) {
                                if (datas["success"]) {
                                    e.value && swal("Supprimé!", "secteur a été supprimé.", "success");
                                } else {
                                    e.value && swal("Supprimé!", "Impossible de supprimer une secteur.", "error");
                                }
                                window.location.replace(Routing.generate('sector_index'));
                            }
                        });
                    }
                });
    });

    $(document).on('click', '#deleteBiddingType', function (e) {
        e.preventDefault();

        var idBiddigType = $(this).attr('data-bidding-type');
        swal({title: "Êtes-vous sûr?", text: "Cette action est irréversible!", type: "warning", showCancelButton: !0, confirmButtonText: "Oui, supprimer!", cancelButtonText: "Non, annuler!"})
                .then(function (e) {
                    if (e.value) {

                        $.ajax({
                            type: 'GET',
                            url: Routing.generate('bidding_type_delete', {'id': idBiddigType}),
                            dataType: "json",
                            success: function (datas) {
                                if (datas["success"]) {
                                    e.value && swal("Supprimé!", "bidding type a été supprimé.", "success");
                                } else {
                                    e.value && swal("Supprimé!", "Impossible de supprimer un bidding type.", "error");
                                }
                                window.location.replace(Routing.generate('bidding_type_index'));
                            }
                        });
                    }
                });
    });

    $(document).on('click', '#deleteBuyerType', function (e) {
        e.preventDefault();

        var idBuyerType = $(this).attr('data-buyer-type');
        swal({title: "Êtes-vous sûr?", text: "Cette action est irréversible!", type: "warning", showCancelButton: !0, confirmButtonText: "Oui, supprimer!", cancelButtonText: "Non, annuler!"})
                .then(function (e) {
                    if (e.value) {

                        $.ajax({
                            type: 'GET',
                            url: Routing.generate('buyer_type_delete', {'id': idBuyerType}),
                            dataType: "json",
                            success: function (datas) {
                                if (datas["success"]) {
                                    e.value && swal("Supprimé!", "Type d'acheteur a été supprimé.", "success");
                                } else {
                                    e.value && swal("Supprimé!", "Impossible de supprimer un Type d'acheteur.", "error");
                                }
                                window.location.replace(Routing.generate('buyer_type_index'));
                            }
                        });
                    }
                });
    });

    $(document).on('click', '#deleteProductType', function (e) {
        e.preventDefault();

        var idProductType = $(this).attr('data-product-type');
        swal({title: "Êtes-vous sûr?", text: "Cette action est irréversible!", type: "warning", showCancelButton: !0, confirmButtonText: "Oui, supprimer!", cancelButtonText: "Non, annuler!"})
                .then(function (e) {
                    if (e.value) {

                        $.ajax({
                            type: 'GET',
                            url: Routing.generate('product_type_delete', {'id': idProductType}),
                            dataType: "json",
                            success: function (datas) {
                                if (datas["success"]) {
                                    e.value && swal("Supprimé!", "Type de produit a été supprimé.", "success");
                                } else {
                                    e.value && swal("Supprimé!", "Impossible de supprimer un Type de produit.", "error");
                                }
                                window.location.replace(Routing.generate('product_type_index'));
                            }
                        });
                    }
                });
    });

    $(document).on('click', '#deleteSupplierType', function (e) {
        e.preventDefault();

        var idSupplierType = $(this).attr('data-supplier-type');
        swal({title: "Êtes-vous sûr?", text: "Cette action est irréversible!", type: "warning", showCancelButton: !0, confirmButtonText: "Oui, supprimer!", cancelButtonText: "Non, annuler!"})
                .then(function (e) {
                    if (e.value) {

                        $.ajax({
                            type: 'GET',
                            url: Routing.generate('supplier_type_delete', {'id': idSupplierType}),
                            dataType: "json",
                            success: function (datas) {
                                if (datas["success"]) {
                                    e.value && swal("Supprimé!", "Type de fournisseur a été supprimé.", "success");
                                } else {
                                    e.value && swal("Supprimé!", "Impossible de supprimer un Type de fournisseur.", "error");
                                }
                                window.location.replace(Routing.generate('supplier_type_index'));
                            }
                        });
                    }
                });
    });


    $(document).on('click', '#deleteTenderType', function (e) {
        e.preventDefault();

        var idTenderType = $(this).attr('data-tender-type');
        swal({title: "Êtes-vous sûr?", text: "Cette action est irréversible!", type: "warning", showCancelButton: !0, confirmButtonText: "Oui, supprimer!", cancelButtonText: "Non, annuler!"})
                .then(function (e) {
                    if (e.value) {

                        $.ajax({
                            type: 'GET',
                            url: Routing.generate('tender_type_delete', {'id': idTenderType}),
                            dataType: "json",
                            success: function (datas) {
                                if (datas["success"]) {
                                    e.value && swal("Supprimé!", "Type d'appel d'offre a été supprimé.", "success");
                                } else {
                                    e.value && swal("Supprimé!", "Impossible de supprimer un Type d'appel d'offre.", "error");
                                }
                                window.location.replace(Routing.generate('tender_type_index'));
                            }
                        });
                    }
                });
    });

    $(document).on('click', '#deleteCategory', function (e) {
        e.preventDefault();

        var idCategory = $(this).attr('data-category');
        swal({title: "Êtes-vous sûr?", text: "Cette action est irréversible!", type: "warning", showCancelButton: !0, confirmButtonText: "Oui, supprimer!", cancelButtonText: "Non, annuler!"})
                .then(function (e) {
                    if (e.value) {

                        $.ajax({
                            type: 'GET',
                            url: Routing.generate('category_delete', {'id': idCategory}),
                            dataType: "json",
                            success: function (datas) {
                                if (datas["success"]) {
                                    e.value && swal("Supprimé!", "categorie a été supprimée.", "success");
                                } else {
                                    e.value && swal("Supprimé!", "Impossible de supprimer une categorie.", "error");
                                }
                                window.location.replace(Routing.generate('category_index'));
                            }
                        });
                    }
                });
    });

    $(document).on('click', '#deleteCountry', function (e) {
        e.preventDefault();

        var idCountry = $(this).attr('data-country');
        swal({title: "Êtes-vous sûr?", text: "Cette action est irréversible!", type: "warning", showCancelButton: !0, confirmButtonText: "Oui, supprimer!", cancelButtonText: "Non, annuler!"})
                .then(function (e) {
                    if (e.value) {

                        $.ajax({
                            type: 'GET',
                            url: Routing.generate('country_delete', {'id': idCountry}),
                            dataType: "json",
                            success: function (datas) {
                                if (datas["success"]) {
                                    e.value && swal("Supprimé!", "Pays a été supprimé.", "success");
                                } else {
                                    e.value && swal("Supprimé!", "Impossible de supprimer un Pays.", "error");
                                }
                                window.location.replace(Routing.generate('country_index'));
                            }
                        });
                    }
                });
    });


    $(document).on('click', '#deletePost', function (e) {
        e.preventDefault();

        var idPost = $(this).attr('data-post');
        swal({title: "Êtes-vous sûr?", text: "Cette action est irréversible!", type: "warning", showCancelButton: !0, confirmButtonText: "Oui, supprimer!", cancelButtonText: "Non, annuler!"})
                .then(function (e) {
                    if (e.value) {

                        $.ajax({
                            type: 'GET',
                            url: Routing.generate('post_delete', {'id': idPost}),
                            dataType: "json",
                            success: function (datas) {
                                if (datas["success"]) {
                                    e.value && swal("Supprimé!", "Page a été supprimée.", "success");
                                } else {
                                    e.value && swal("Supprimé!", "Impossible de supprimer la page.", "error");
                                }
                                window.location.replace(Routing.generate('post_index'));
                            }
                        });
                    }
                });
    });


    $(document).on('click', '#deleteSupplier', function (e) {
        e.preventDefault();

        var idSupplier = $(this).attr('data-supplier');
        swal({title: "Êtes-vous sûr?", text: "Cette action est irréversible!", type: "warning", showCancelButton: !0, confirmButtonText: "Oui, supprimer!", cancelButtonText: "Non, annuler!"})
                .then(function (e) {
                    if (e.value) {

                        $.ajax({
                            type: 'GET',
                            url: Routing.generate('supplier_delete', {'id': idSupplier}),
                            dataType: "json",
                            success: function (datas) {
                                if (datas["success"]) {
                                    e.value && swal("Supprimé!", "Fournisseur a été supprimé.", "success");
                                } else {
                                    e.value && swal("Supprimé!", "Impossible de supprimer un fournisseur.", "error");
                                }
                                window.location.replace(Routing.generate('supplier_index'));
                            }
                        });
                    }
                });
    });

    $(document).on('click', '#deleteBuyer', function (e) {
        e.preventDefault();

        var idBuyer = $(this).attr('data-buyer');
        swal({title: "Êtes-vous sûr?", text: "Cette action est irréversible!", type: "warning", showCancelButton: !0, confirmButtonText: "Oui, supprimer!", cancelButtonText: "Non, annuler!"})
                .then(function (e) {
                    if (e.value) {

                        $.ajax({
                            type: 'GET',
                            url: Routing.generate('buyer_delete', {'id': idBuyer}),
                            dataType: "json",
                            success: function (datas) {
                                if (datas["success"]) {
                                    e.value && swal("Supprimé!", "Acheteur a été supprimé.", "success");
                                } else {
                                    e.value && swal("Supprimé!", "Impossible de supprimer un Acheteur.", "error");
                                }
                                window.location.replace(Routing.generate('buyer_index'));
                            }
                        });
                    }
                });
    });

    $(document).on('click', '#deleteTender', function (e) {
        e.preventDefault();

        var idTender = $(this).attr('data-tender');
        swal({title: "Êtes-vous sûr?", text: "Cette action est irréversible!", type: "warning", showCancelButton: !0, confirmButtonText: "Oui, supprimer!", cancelButtonText: "Non, annuler!"})
                .then(function (e) {
                    if (e.value) {

                        $.ajax({
                            type: 'GET',
                            url: Routing.generate('tender_delete', {'id': idTender}),
                            dataType: "json",
                            success: function (datas) {
                                if (datas["success"]) {
                                    e.value && swal("Supprimé!", "Appel d'offre a été supprimé.", "success");
                                } else {
                                    e.value && swal("Supprimé!", "Impossible de supprimer un appel d'offre.", "error");
                                }
                                window.location.replace(Routing.generate('tender_index'));
                            }
                        });
                    }
                });
    });
    
    $(document).on('click', '#deleteProduct', function (e) {
        e.preventDefault();

        var idProduct = $(this).attr('data-product');
        swal({title: "Êtes-vous sûr?", text: "Cette action est irréversible!", type: "warning", showCancelButton: !0, confirmButtonText: "Oui, supprimer!", cancelButtonText: "Non, annuler!"})
                .then(function (e) {
                    if (e.value) {

                        $.ajax({
                            type: 'GET',
                            url: Routing.generate('supplier_product_delete', {'id': idProduct}),
                            dataType: "json",
                            success: function (datas) {
                                if (datas["success"]) {
                                    e.value && swal("Supprimé!", "Produit a été supprimé.", "success");
                                } else {
                                    e.value && swal("Supprimé!", "Impossible de supprimer un produit.", "error");
                                }
                                window.location.replace(Routing.generate('supplier_product_index'));
                            }
                        });
                    }
                });
    });
    
    $(document).on('click', '#deleteDemand', function (e) {
        e.preventDefault();

        var idDemand = $(this).attr('data-demand');
        swal({title: "Êtes-vous sûr?", text: "Cette action est irréversible!", type: "warning", showCancelButton: !0, confirmButtonText: "Oui, supprimer!", cancelButtonText: "Non, annuler!"})
                .then(function (e) {
                    if (e.value) {

                        $.ajax({
                            type: 'GET',
                            url: Routing.generate('demand_delete', {'id': idDemand}),
                            dataType: "json",
                            success: function (datas) {
                                if (datas["success"]) {
                                    e.value && swal("Supprimé!", "Demand a été supprimé.", "success");
                                } else {
                                    e.value && swal("Supprimé!", "Impossible de supprimer un Demand.", "error");
                                }
                                window.location.replace(Routing.generate('demand_index'));
                            }
                        });
                    }
                });
    });
    
    $(document).on('click', '#deleteEmail', function (e) {
        e.preventDefault();

        var idEmail = $(this).attr('data-email');
        swal({title: "Êtes-vous sûr?", text: "Cette action est irréversible!", type: "warning", showCancelButton: !0, confirmButtonText: "Oui, supprimer!", cancelButtonText: "Non, annuler!"})
                .then(function (e) {
                    if (e.value) {

                        $.ajax({
                            type: 'GET',
                            url: Routing.generate('email_delete', {'id': idEmail}),
                            dataType: "json",
                            success: function (datas) {
                                if (datas["success"]) {
                                    e.value && swal("Supprimé!", "Email a été supprimé.", "success");
                                } else {
                                    e.value && swal("Supprimé!", "Impossible de supprimer un email.", "error");
                                }
                                window.location.replace(Routing.generate('email_index'));
                            }
                        });
                    }
                });
    });
    
    $(document).on('click', '#deleteBid', function (e) {
        e.preventDefault();

        var idBid = $(this).attr('data-bid');
        swal({title: "Êtes-vous sûr?", text: "Cette action est irréversible!", type: "warning", showCancelButton: !0, confirmButtonText: "Oui, supprimer!", cancelButtonText: "Non, annuler!"})
                .then(function (e) {
                    if (e.value) {

                        $.ajax({
                            type: 'GET',
                            url: Routing.generate('bid_delete', {'id': idBid}),
                            dataType: "json",
                            success: function (datas) {
                                if (datas["success"]) {
                                    e.value && swal("Supprimé!", "Bid a été supprimé.", "success");
                                } else {
                                    e.value && swal("Supprimé!", "Impossible de supprimer un Bid.", "error");
                                }
                                window.location.replace(Routing.generate('bid_index'));
                            }
                        });
                    }
                });
    });
    
    $(document).on('click', '#deleteComment', function (e) {
        e.preventDefault();

        var idComment = $(this).attr('data-comment');
        swal({title: "Êtes-vous sûr?", text: "Cette action est irréversible!", type: "warning", showCancelButton: !0, confirmButtonText: "Oui, supprimer!", cancelButtonText: "Non, annuler!"})
                .then(function (e) {
                    if (e.value) {

                        $.ajax({
                            type: 'GET',
                            url: Routing.generate('comment_delete', {'id': idComment}),
                            dataType: "json",
                            success: function (datas) {
                                if (datas["success"]) {
                                    e.value && swal("Supprimé!", "Commentaire a été supprimé.", "success");
                                } else {
                                    e.value && swal("Supprimé!", "Impossible de supprimer un commentaire.", "error");
                                }
                                window.location.replace(Routing.generate('comment_index'));
                            }
                        });
                    }
                });
    }); */


    /* ------------------------------------- GRID TEMPLATE----------------------------------- */



    /* -------------------------------------EVENEMENTS CLICK END----------------------------------- */

    /* -------------------------------------EVENEMENTS KEYDOWN----------------------------------- */

    /* -------------------------------------EVENEMENTS KEYDOWN END----------------------------------- */


    /* -------------------------------------EVENEMENTS KEYPRESS END----------------------------------- */

    /* -------------------------------------EVENEMENTS CHANGE START----------------------------------- */

    /* -------------------------------------EVENEMENTS CHANGE END----------------------------------- */



    /* -------------------------------------EVENEMENTS SWITCH CHANGE----------------------------------- */

    /* -------------------------------------EVENEMENTS SWITCH CHANGE END----------------------------------- */



    /* -------------------------------------EVENEMENTS SUBMIT END----------------------------------- */


    /* -------------------------------------EVENEMENTS SUBMIT END----------------------------------- */


    /* -------------------------------------FUNCTIONS----------------------------------- */

    function init() {
        datepicker();
        usersDatatable();
       /* languagesDatatable();
        regionsDatatable();
        sectorsDatatable();
        biddingTypeDatatable();
        buyerTypeDatatable();
        productTypeDatatable();
        supplierTypeDatatable();
        tenderTypeDatatable();
        categoriesDatatable();
        countriesDatatable();
        postsDatatable();
        supplierDatatable();
        buyerDatatable();
        tenderDatatable();
        productDatatable();
        demandDatatable();
        emailDatatable();
        bidDatatable();
        commentDatatable();*/
    }

    /* ########################### */
    /* ###      USERS    ######## */
    /* ########################### */
    function usersDatatable() {
        if (usersDt !== null) {
            usersDt.destroy();
        }

        if ($(".role").length) {
            var role = $(".role").attr('data-role');
        }

        datatableOptions["data"] = {
            type: 'remote',
            source: {
                read: {
                    url: Routing.generate('list_user'),
                    method: 'GET',
                    // custom headers
                    params: {
                        // custom parameters
                        name: $('#user_filter_username').val(),
                        email: $('#user_filter_email').val(),
                        enable: $("#user_filter_enabled").val(),
                    },
                    map: function (raw) {
                        // sample data mapping
                        var dataSet = raw;
                        if (typeof raw.data !== 'undefined') {
                            dataSet = raw.data;
                        }
                        return dataSet;
                    },
                }
            },
            pageSize: 10,
            serverPaging: true

        };

        datatableOptions["columns"] = [{
                field: "id",
                title: "ID",
                sortable: 'asc',
                textAlign: "center"
            }, {
                field: "name",
                title: "Nom du contact",
                sortable: 'asc',
            }, {
                field: "email",
                title: "Mail du contact",
                sortable: 'asc',
                textAlign: "center"
            },

            {
                field: "enable",
                title: "Etat",
                width: 100,
                // callback function support for column rendering
                template: function (row) {
                    var status = {

                        0: {'title': 'Inactif', 'class': ' m-badge--metal'},
                        1: {'title': 'Actif', 'class': ' m-badge--info'},

                    };
                    return '<span class="m-badge ' + status[row.enable].class + ' m-badge--wide">' + status[row.enable].title + '</span>';
                }
            },
            {
                field: "actions",
                title: "Actions",
                width: 110,
                sortable: false,
                overflow: "visible",
                template: function (t, e, a) {
                    if (role == 'ROLE_SUPER_ADMIN') {
                        return '<a href="' + Routing.generate('user_edit', {'id': t.id}) + '" class="m-portlet__nav-link btn m-btn m-btn--hover-danger m-btn--icon m-btn--icon-only m-btn--pill" title="Modifier">\t\t\t\t\t\t\t<i class="la la-cog"></i>\t\t\t\t\t\t</a>\t\t\t\t\t<a id="deleteUser" class="m-portlet__nav-link btn m-btn m-btn--hover-danger m-btn--icon m-btn--icon-only m-btn--pill" title="Supprimer" data-user="' + t.id + '">\t\t\t\t\t\t\t<i class="la la-trash"></i>\t\t\t\t\t\t</a>\t\t\t\t\t'
                    } else {
                        return '<a href="' + Routing.generate('user_edit', {'id': t.id}) + '" class="m-portlet__nav-link btn m-btn m-btn--hover-danger m-btn--icon m-btn--icon-only m-btn--pill" title="Modifier">\t\t\t\t\t\t\t<i class="la la-cog"></i>\t\t\t\t\t\t</a>\t\t\t\t\t\t\t\t\t\t'
                    }

                }
            }];

        usersDt = $('#usersTable').mDatatable(datatableOptions);

    }


    /* ########################### */
    /* ###   LANGUAGES    ######## */
    /* ########################### */

   /* function languagesDatatable() {
        if (languagesDt !== null) {
            languagesDt.destroy();
        }

        if ($(".role").length) {
            var role = $(".role").attr('data-role');
        }

        datatableOptions["data"] = {
            type: 'remote',
            source: {
                read: {
                    url: Routing.generate('list_languages'),
                    method: 'GET',
                    // custom headers
                    params: {
                        // custom parameters
                        name: $('#language_filter_name').val(),
                        local: $('#language_filter_local').val(),
                        code: $('#language_filter_code').val(),
                        preferred: $("#language_filter_preferred").val(),
                        dateBefore: $('#language_filter_dateBefore').val(),
                        dateAfter: $('#language_filter_dateAfter').val(),
                    },
                    map: function (raw) {
                        // sample data mapping
                        var dataSet = raw;
                        if (typeof raw.data !== 'undefined') {
                            dataSet = raw.data;
                        }
                        return dataSet;
                    },
                }
            },
            pageSize: 10,
            serverPaging: true

        };

        datatableOptions["columns"] = [{
                field: "id",
                title: "ID",
                sortable: 'asc',
                textAlign: "center"
            }, {
                field: "createAt",
                title: "Date création",
                sortable: 'asc',
                textAlign: "center"
            }, {
                field: "name",
                title: "Langue",
                sortable: 'asc',
            }, {
                field: "local",
                title: "Local",
                sortable: 'asc',
                textAlign: "center"
            }, {
                field: "code",
                title: "Code",
                sortable: 'asc',
                textAlign: "center"
            },

            {
                field: "path",
                title: "Image",
                sortable: false,
                overflow: "visible",
                textAlign: "center",
                template: function (t, e, a) {
                    return '<img src="' + t.path + '" style="height:auto; width:80px;"/>\t\t\t\t\t'
                }
            },

            {
                field: "preferred",
                title: "Préférée ou non",
                width: 100,
                // callback function support for column rendering
                template: function (row) {
                    var status = {

                        0: {'title': 'Normal', 'class': ' m-badge--metal'},
                        1: {'title': 'Préférée', 'class': ' m-badge--info'},

                    };
                    return '<span class="m-badge ' + status[row.preferred].class + ' m-badge--wide">' + status[row.preferred].title + '</span>';
                }
            },
            {
                field: "actions",
                title: "Actions",
                width: 110,
                sortable: false,
                overflow: "visible",
                template: function (t, e, a) {
                    if (role == 'ROLE_SUPER_ADMIN') {
                        return '<a href="' + Routing.generate('language_edit', {'id': t.id}) + '" class="m-portlet__nav-link btn m-btn m-btn--hover-danger m-btn--icon m-btn--icon-only m-btn--pill" title="Modifier">\t\t\t\t\t\t\t<i class="la la-cog"></i>\t\t\t\t\t\t</a>\t\t\t\t\t<a id="deleteLanguage" class="m-portlet__nav-link btn m-btn m-btn--hover-danger m-btn--icon m-btn--icon-only m-btn--pill" title="Supprimer" data-language="' + t.id + '">\t\t\t\t\t\t\t<i class="la la-trash"></i>\t\t\t\t\t\t</a>\t\t\t\t\t'
                    } else {
                        return '<a href="' + Routing.generate('language_edit', {'id': t.id}) + '" class="m-portlet__nav-link btn m-btn m-btn--hover-danger m-btn--icon m-btn--icon-only m-btn--pill" title="Modifier">\t\t\t\t\t\t\t<i class="la la-cog"></i>\t\t\t\t\t\t</a>\t\t\t\t\t\t\t\t\t\t'
                    }

                }
            }];

        languagesDt = $('#languageTable').mDatatable(datatableOptions);

    }
*/

    /* ########################### */
    /* ###      REGIONS    ######## */
    /* ########################### */
    /*function regionsDatatable() {
        if (regionsDt !== null) {
            regionsDt.destroy();
        }

        if ($(".role").length) {
            var role = $(".role").attr('data-role');
        }

        datatableOptions["data"] = {
            type: 'remote',
            source: {
                read: {
                    url: Routing.generate('list_region'),
                    method: 'GET',
                    // custom headers
                    params: {
                        // custom parameters
                        name: $('#region_filter_name').val(),
                        published: $("#region_filter_published").val(),
                    },
                    map: function (raw) {
                        // sample data mapping
                        var dataSet = raw;
                        if (typeof raw.data !== 'undefined') {
                            dataSet = raw.data;
                        }
                        return dataSet;
                    },
                }
            },
            pageSize: 10,
            serverPaging: true

        };

        datatableOptions["columns"] = [{
                field: "id",
                title: "ID",
                sortable: 'asc',
                textAlign: "center"
            }, {
                field: "createAt",
                title: "Date création",
                sortable: 'asc',
                textAlign: "center"
            }, {
                field: "name",
                title: "Nom de region",
                sortable: 'asc',
            }, {
                field: "creatorUser",
                title: "Créer par",
                sortable: 'asc',
                textAlign: "center"
            },
            {
                field: "published",
                title: "Etat",
                width: 100,
                // callback function support for column rendering
                template: function (row) {
                    var status = {

                        0: {'title': 'Non publier', 'class': ' m-badge--metal'},
                        1: {'title': 'Publier', 'class': ' m-badge--info'},

                    };
                    return '<span class="m-badge ' + status[row.published].class + ' m-badge--wide">' + status[row.published].title + '</span>';
                }
            },
            {
                field: "actions",
                title: "Actions",
                width: 110,
                sortable: false,
                overflow: "visible",
                template: function (t, e, a) {
                    if (role == 'ROLE_SUPER_ADMIN') {
                        return '<a href="' + Routing.generate('region_edit', {'id': t.id}) + '" class="m-portlet__nav-link btn m-btn m-btn--hover-danger m-btn--icon m-btn--icon-only m-btn--pill" title="Modifier">\t\t\t\t\t\t\t<i class="la la-cog"></i>\t\t\t\t\t\t</a>\t\t\t\t\t<a id="deleteRegion" class="m-portlet__nav-link btn m-btn m-btn--hover-danger m-btn--icon m-btn--icon-only m-btn--pill" title="Supprimer" data-region="' + t.id + '">\t\t\t\t\t\t\t<i class="la la-trash"></i>\t\t\t\t\t\t</a>\t\t\t\t\t<a href="' + Routing.generate('region_translate', {'id': t.id}) + '" class="m-portlet__nav-link btn m-btn m-btn--hover-focus m-btn--icon m-btn--icon-only m-btn--pill" title="Traduction">\t\t\t\t\t\t\t<i class="la la-language"></i>\t\t\t\t\t\t</a>\t\t\t\t\t'
                    } else {
                        return '<a href="' + Routing.generate('region_edit', {'id': t.id}) + '" class="m-portlet__nav-link btn m-btn m-btn--hover-danger m-btn--icon m-btn--icon-only m-btn--pill" title="Modifier">\t\t\t\t\t\t\t<i class="la la-cog"></i>\t\t\t\t\t\t</a>\t\t\t\t\t\t\t\t\t\t<a href="' + Routing.generate('region_translate', {'id': t.id}) + '" class="m-portlet__nav-link btn m-btn m-btn--hover-danger m-btn--icon m-btn--icon-only m-btn--pill" title="Traduction">\t\t\t\t\t\t\t<i class="la la-language"></i>\t\t\t\t\t\t</a>\t\t\t\t\t'
                    }
                }
            }];

        regionsDt = $('#regionsTable').mDatatable(datatableOptions);

    }*/


    /* ########################### */
    /* ###      SECTORS    ######## */
    /* ########################### */
  /*  function sectorsDatatable() {
        if (sectorsDt !== null) {
            sectorsDt.destroy();
        }

        if ($(".role").length) {
            var role = $(".role").attr('data-role');
        }

        datatableOptions["data"] = {
            type: 'remote',
            source: {
                read: {
                    url: Routing.generate('list_sector'),
                    method: 'GET',
                    // custom headers
                    params: {
                        // custom parameters
                        name: $('#sector_filter_name').val(),
                        published: $("#sector_filter_published").val(),
                    },
                    map: function (raw) {
                        // sample data mapping
                        var dataSet = raw;
                        if (typeof raw.data !== 'undefined') {
                            dataSet = raw.data;
                        }
                        return dataSet;
                    },
                }
            },
            pageSize: 10,
            serverPaging: true

        };

        datatableOptions["columns"] = [{
                field: "id",
                title: "ID",
                sortable: 'asc',
                textAlign: "center"
            }, {
                field: "createAt",
                title: "Date création",
                sortable: 'asc',
                textAlign: "center"
            }, {
                field: "name",
                title: "Nom de secteur",
                sortable: 'asc',
            }, {
                field: "creatorUser",
                title: "Créer par",
                sortable: 'asc',
                textAlign: "center"
            },
            {
                field: "published",
                title: "Etat",
                width: 100,
                // callback function support for column rendering
                template: function (row) {
                    var status = {

                        0: {'title': 'Non publier', 'class': ' m-badge--metal'},
                        1: {'title': 'Publier', 'class': ' m-badge--info'},

                    };
                    return '<span class="m-badge ' + status[row.published].class + ' m-badge--wide">' + status[row.published].title + '</span>';
                }
            },
            {
                field: "actions",
                title: "Actions",
                width: 110,
                sortable: false,
                overflow: "visible",
                template: function (t, e, a) {
                    if (role == 'ROLE_SUPER_ADMIN') {
                        return '<a href="' + Routing.generate('sector_edit', {'id': t.id}) + '" class="m-portlet__nav-link btn m-btn m-btn--hover-danger m-btn--icon m-btn--icon-only m-btn--pill" title="Modifier">\t\t\t\t\t\t\t<i class="la la-cog"></i>\t\t\t\t\t\t</a>\t\t\t\t\t<a id="deleteSector" class="m-portlet__nav-link btn m-btn m-btn--hover-danger m-btn--icon m-btn--icon-only m-btn--pill" title="Supprimer" data-sector="' + t.id + '">\t\t\t\t\t\t\t<i class="la la-trash"></i>\t\t\t\t\t\t</a>\t\t\t\t\t<a href="' + Routing.generate('sector_translate', {'id': t.id}) + '" class="m-portlet__nav-link btn m-btn m-btn--hover-danger m-btn--icon m-btn--icon-only m-btn--pill" title="Traduction">\t\t\t\t\t\t\t<i class="la la-language"></i>\t\t\t\t\t\t</a>\t\t\t\t\t'
                    } else {
                        return '<a href="' + Routing.generate('sector_edit', {'id': t.id}) + '" class="m-portlet__nav-link btn m-btn m-btn--hover-danger m-btn--icon m-btn--icon-only m-btn--pill" title="Modifier">\t\t\t\t\t\t\t<i class="la la-cog"></i>\t\t\t\t\t\t</a>\t\t\t\t\t\t\t\t\t\t<a href="' + Routing.generate('sector_translate', {'id': t.id}) + '" class="m-portlet__nav-link btn m-btn m-btn--hover-danger m-btn--icon m-btn--icon-only m-btn--pill" title="Traduction">\t\t\t\t\t\t\t<i class="la la-language"></i>\t\t\t\t\t\t</a>\t\t\t\t\t'
                    }
                }
            }];

        sectorsDt = $('#sectorsTable').mDatatable(datatableOptions);

    }*/


    /* ########################### */
    /* ###     biddingType  ###### */
    /* ########################### */
  /*   function biddingTypeDatatable() {
        if (biddigTypeDt !== null) {
            biddigTypeDt.destroy();
        }

        if ($(".role").length) {
            var role = $(".role").attr('data-role');
        }

        datatableOptions["data"] = {
            type: 'remote',
            source: {
                read: {
                    url: Routing.generate('list_bidding_type'),
                    method: 'GET',
                    // custom headers
                    params: {
                        // custom parameters
                        name: $('#bidding_type_filter_name').val(),
                        isPublished: $("#bidding_type_filter_isPublished").val(),
                    },
                    map: function (raw) {
                        // sample data mapping
                        var dataSet = raw;
                        if (typeof raw.data !== 'undefined') {
                            dataSet = raw.data;
                        }
                        return dataSet;
                    },
                }
            },
            pageSize: 10,
            serverPaging: true

        };

        datatableOptions["columns"] = [{
                field: "id",
                title: "ID",
                sortable: 'asc',
                textAlign: "center"
            }, {
                field: "createAt",
                title: "Date création",
                sortable: 'asc',
                textAlign: "center"
            }, {
                field: "name",
                title: "Nom de bidding",
                sortable: 'asc',
            }, {
                field: "creatorUser",
                title: "Créer par",
                sortable: 'asc',
                textAlign: "center"
            },
            {
                field: "published",
                title: "Etat",
                width: 100,
                // callback function support for column rendering
                template: function (row) {
                    var status = {

                        0: {'title': 'Non publier', 'class': ' m-badge--metal'},
                        1: {'title': 'Publier', 'class': ' m-badge--info'},

                    };
                    return '<span class="m-badge ' + status[row.published].class + ' m-badge--wide">' + status[row.published].title + '</span>';
                }
            },
            {
                field: "actions",
                title: "Actions",
                width: 110,
                sortable: false,
                overflow: "visible",
                template: function (t, e, a) {
                    if (role == 'ROLE_SUPER_ADMIN') {
                        return '<a href="' + Routing.generate('bidding_type_edit', {'id': t.id}) + '" class="m-portlet__nav-link btn m-btn m-btn--hover-danger m-btn--icon m-btn--icon-only m-btn--pill" title="Modifier">\t\t\t\t\t\t\t<i class="la la-cog"></i>\t\t\t\t\t\t</a>\t\t\t\t\t<a id="deleteBiddingType" class="m-portlet__nav-link btn m-btn m-btn--hover-danger m-btn--icon m-btn--icon-only m-btn--pill" title="Supprimer" data-bidding-type="' + t.id + '">\t\t\t\t\t\t\t<i class="la la-trash"></i>\t\t\t\t\t\t</a>\t\t\t\t\t<a href="' + Routing.generate('bidding_type_translate', {'id': t.id}) + '" class="m-portlet__nav-link btn m-btn m-btn--hover-danger m-btn--icon m-btn--icon-only m-btn--pill" title="Traduction">\t\t\t\t\t\t\t<i class="la la-language"></i>\t\t\t\t\t\t</a>\t\t\t\t\t'
                    } else {
                        return '<a href="' + Routing.generate('bidding_type_edit', {'id': t.id}) + '" class="m-portlet__nav-link btn m-btn m-btn--hover-danger m-btn--icon m-btn--icon-only m-btn--pill" title="Modifier">\t\t\t\t\t\t\t<i class="la la-cog"></i>\t\t\t\t\t\t</a>\t\t\t\t\t\t\t\t\t\t<a href="' + Routing.generate('bidding_type_translate', {'id': t.id}) + '" class="m-portlet__nav-link btn m-btn m-btn--hover-danger m-btn--icon m-btn--icon-only m-btn--pill" title="Traduction">\t\t\t\t\t\t\t<i class="la la-language"></i>\t\t\t\t\t\t</a>\t\t\t\t\t'
                    }
                }
            }];

        biddigTypeDt = $('#biddingTypeTable').mDatatable(datatableOptions);

    }*/


  
    function datepicker() {

        if ($('.datetimepicker').length > 0) {

            $.datepicker.regional['fr'] = {
                closeText: 'Fermer',
                prevText: 'Précédent',
                nextText: 'Suivant',
                currentText: 'Aujourd\'hui',
                monthNames: ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'],
                monthNamesShort: ['Janv.', 'Févr.', 'Mars', 'Avril', 'Mai', 'Juin', 'Juil.', 'Août', 'Sept.', 'Oct.', 'Nov.', 'Déc.'],
                dayNames: ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'],
                dayNamesShort: ['Dim.', 'Lun.', 'Mar.', 'Mer.', 'Jeu.', 'Ven.', 'Sam.'],
                dayNamesMin: ['D', 'L', 'M', 'M', 'J', 'V', 'S'],
                weekHeader: 'Sem.',
                dateFormat: 'dd/mm/yy',
                firstDay: 1,
                isRTL: false,
                showMonthAfterYear: false,
                yearSuffix: ''
            };
            $.datepicker.setDefaults($.datepicker.regional['fr']);
            $('.datetimepicker').each(function () {
                $(this).datetimepicker({
                    dateFormat: "dd/mm/yy",
                    timeFormat: 'HH:mm:ss',
                    language: 'fr',
                    hourText: 'Heure',
                    minuteText: 'Minute',
                    secondText: 'Seconde',
                });
            });
        }

        if ($('.datepickerr').length > 0) {

            $.datepicker.regional['fr'] = {
                closeText: 'Fermer',
                prevText: 'Précédent',
                nextText: 'Suivant',
                currentText: 'Aujourd\'hui',
                monthNames: ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'],
                monthNamesShort: ['Janv.', 'Févr.', 'Mars', 'Avril', 'Mai', 'Juin', 'Juil.', 'Août', 'Sept.', 'Oct.', 'Nov.', 'Déc.'],
                dayNames: ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'],
                dayNamesShort: ['Dim.', 'Lun.', 'Mar.', 'Mer.', 'Jeu.', 'Ven.', 'Sam.'],
                dayNamesMin: ['D', 'L', 'M', 'M', 'J', 'V', 'S'],
                weekHeader: 'Sem.',
                dateFormat: 'dd/mm/yy',
                firstDay: 1,
                isRTL: false,
                showMonthAfterYear: false,
                yearSuffix: ''
            };

            $.datepicker.setDefaults($.datepicker.regional['fr']);
            $('.datepickerr').each(function () {
                $(this).datetimepicker({
                    dateFormat: "dd/mm/yy",
                    timepicker: false,
                    onShow: function (ct) {
                        this.setOptions({
                            formatDate: "d/m/Y"
                        })
                    }


                });
            });

        }
    }






    /* -------------------------------------FUNCTIONS END------------------------------------ */
});
