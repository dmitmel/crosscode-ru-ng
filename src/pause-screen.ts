ig.module('crosscode-ru.fixes.pause-screen')
  .requires('game.feature.gui.screen.pause-screen')
  .defines(() => {
    sc.PauseScreenGui.inject({
      init() {
        this.parent();
        this._fixButtonWidths();
      },

      updateButtons(refocus) {
        this.parent(refocus);
        this._fixButtonWidths();
      },

      _fixButtonWidths() {
        [
          this.resumeButton,
          this.skipButton,
          this.cancelButton,
          this.toTitleButton,
          this.saveGameButton,
          this.optionsButton,
          this.arenaRestart,
          this.arenaLobby,
        ].forEach(btn => {
          btn.setWidth(sc.BUTTON_DEFAULT_WIDTH + 10);
        });
      },
    });
  });