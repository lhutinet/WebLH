<template>
    <div class="button-3d">
        <div class="button-layer">
            <div class="button-inner">
                ⚡
            </div>
        </div>
    </div>


</template>
<style>
.button-3d {
    width: 120px;
    height: 120px;
    border-radius: 24px;
    background: #1c1c1c;
    box-shadow:
        inset 8px 8px 16px #0a0a0a,
        inset -8px -8px 16px #2a2a2a,
        2px 2px 4px #000;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
}

/* Strate 2 : rainure plus marquée */
.button-layer {
    width: 90px;
    height: 90px;
    border-radius: 20px;
    background: #151515;
    box-shadow:
        inset 6px 6px 12px #0a0a0a,
        inset -6px -6px 12px #2a2a2a,
        0 0 2px #000;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
}

/* Strate 3 : cercle central plus creusé */
.button-inner {
    width: 64px;
    height: 64px;
    border-radius: 50%;
    background: #171717;
    box-shadow:
        inset 4px 4px 8px #0a0a0a,
        inset -4px -4px 8px #2a2a2a,
        0 0 2px #000;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #8b5cf6;
    font-size: 2rem;
    text-shadow: 0 0 4px #8b5cf6;
}
</style>