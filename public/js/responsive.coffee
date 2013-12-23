jRes = jRespond([
    {
        label: 'handheld'
        enter: 0
        exit: 481
    },
    {
        label: 'tablet'
        enter: 482,
        exit: 979
    },
    {
        label: 'laptop',
        enter: 980,
        exit: 1199
    },
    {
        label: 'desktop',
        enter: 1200
    }
])

$ ->

    setBtnText = (text) ->
        # we don't cache the element selector here
        # because it's created by the CompositeView instance.
        # With the app's current structure that isn't really a
        # problem, but it's a very tiny performance increase
        # compared to the potential for added complexity.
        # 
        # (e.g. if structure were changed so that different
        # TodoCompositeViews were instantiated throughout one session,
        # maybe because we have multiple list categories or multiple users' lists,
        # we'd end up with a problem here.)
        # 
        $btn = $("#todo-entry-btn")
        $btn.text text


    jRes.addFunc {
        breakpoint: "handheld"
        enter: ->
            setBtnText "+"
        exit: ->
            setBtnText "Add To-do"
    }
